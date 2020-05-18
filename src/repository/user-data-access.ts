import { User } from '../model/user';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from '.';

// an async function can await Promises instead of using callbacks
// async functions return Promises
export async function getAllUsers(): Promise<User[]> {
  let client : PoolClient;
  client = await connectionPool.connect();
  try {
    let result : QueryResult;
    result = await client.query(
      `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
      FROM projectzero.users, projectzero."Role" WHERE users."role" = "Role".roleid;`
    );
    // result.rows contains objects that almost match our User objects.  Let's write a map()
    // that finishes the conversion
    for(let row of result.rows) {
      console.log(row.username);
    }
    return result.rows.map((u) => {
      return new User(u.userid, u.username, u.password, u.firstname, u.lastname, u.email, u.role);
    });
  } catch(e) {
    throw new Error(`Failed to query for all users: ${e.message}`);
  } finally {
    //as a reminder, finally always runs, regardless of success or failure.
    // One of the main uses of finally is to "clean up" whatever you were doing in try{}.
    // In our case, that means releasing our connection back into the pool:
    client && client.release();
  }
}

export async function getUserById(id: number) : Promise<User[]> {
    let client : PoolClient;
    client = await connectionPool.connect();
    try {
        let result : QueryResult;
        result = await client.query(
        `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
        FROM projectzero.users, projectzero."Role" WHERE users."role" = "Role".roleid AND users.userid = $1;`, [id]
        );
        // result.rows contains objects that almost match our User objects.  Let's write a map()
        // that finishes the conversion
        for(let row of result.rows) {
        console.log(row.username);
        }
        return result.rows.map((u) => {
        return new User(u.userid, u.username, u.password, u.firstname, u.lastname, u.email, u.role);
        });
    } catch(e) {
        throw new Error(`Failed to query for user: ${e.message}`);
    } finally {
        client && client.release();
    }
}

export async function addNewUser(username: string, password: string, firstname: string, lastname: string, email: string, role:string) : Promise<User> {
  let client : PoolClient = await connectionPool.connect();
  try {
    // We need to send another query to get the appropriate role_id for the user's role.
    const roleIdResult : QueryResult = await client.query(
      `SELECT * FROM projectzero."Role" WHERE "Role"."role" = $1`, [role]
    );
    // Get the id we need from that query result
    const roleId = roleIdResult.rows[0].roleid;
    
    // Actually add the user, with appropriate role_id
    let insertUserResult : QueryResult = await client.query(
      `INSERT INTO projectzero.users (username, "password", firstname, lastname, email, "role") VALUES
      ($1, $2, $3, $4, $5, $6);`, [username, password, firstname, lastname, email, roleId]
    )
    
    // Since we're returning the user, pull our newly created user back out of the db:
    let result : QueryResult = await client.query(
      `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
      FROM projectzero.users INNER JOIN projectzero."Role" ON users."role" = "Role".roleid
      WHERE users.username = $1;`, [username]
    );

    return result.rows.map(
      (u)=>{return new User(u.id, u.username, u.password, u.firstName, u.lastName, u.email, u.role_name)}
    )[0];
  } catch (e) {
    throw new Error(`Failed to add user to DB: ${e.message}`);
  } finally {
    client && client.release();
  }
}
export async function updateUser(id: number, username: string, password: string, firstname: string, lastname: string, email: string, role:string) : Promise<User> {
    let client : PoolClient = await connectionPool.connect();
    try {
      
      // Actually add the user, with appropriate role_id
      let updateResult : QueryResult = await client.query(`
        UPDATE projectzero.users SET
        username = COALESCE($1, username),
        "password"= COALESCE($2, "password"),
        firstname = COALESCE($3, firstname),
        lastname = COALESCE($4, lastname),
        email = COALESCE($5, email),
        "role" = COALESCE($6, "role") 
        WHERE users.userID = $7;`, [username, password, firstname, lastname, email, role, id]
      )
      
      // Since we're returning the user, pull our newly created user back out of the db:
      let result : QueryResult = await client.query(
        `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
        FROM projectzero.users INNER JOIN projectzero."Role" ON users."role" = "Role".roleid
        WHERE users.userID = $1;`, [id]
      );
  
      return result.rows.map(
        (u)=>{return new User(u.id, u.username, u.password, u.firstName, u.lastName, u.email, u.role_name)}
      )[0];
    } catch (e) {
      throw new Error(`Failed to update user in DB: ${e.message}`);
    } finally {
      client && client.release();
    }
  }