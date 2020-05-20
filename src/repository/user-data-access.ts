import { User } from '../model/user';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from '.';

export async function getAllUsers(): Promise<User[]> {
  let client : PoolClient;
  client = await connectionPool.connect();
  try {
    let result : QueryResult;
    result = await client.query(
      `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
      FROM projectzero.users, projectzero."Role" WHERE users."role" = "Role".roleid;`
    );
    for(let row of result.rows) {
      console.log(row.username);
    }
    return result.rows.map((u) => {
      return new User(u.userid, u.username, u.password, u.firstname, u.lastname, u.email, u.role);
    });
  } catch(e) {
    throw new Error(`Failed to query for all users: ${e.message}`);
  } finally {
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
    const roleIdResult : QueryResult = await client.query(
      `SELECT * FROM projectzero."Role" WHERE "Role"."role" = $1`, [role]
    );
    const roleId = roleIdResult.rows[0].roleid;
    
    let insertUserResult : QueryResult = await client.query(
      `INSERT INTO projectzero.users (username, "password", firstname, lastname, email, "role") VALUES
      ($1, $2, $3, $4, $5, $6);`, [username, password, firstname, lastname, email, roleId]
    )
    
    let result : QueryResult = await client.query(
      `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
      FROM projectzero.users INNER JOIN projectzero."Role" ON users."role" = "Role".roleid
      WHERE users.username = $1;`, [username]
    );

    return result.rows.map(
      (u)=>{return new User(u.id, u.username, u.password, u.firstname, u.lastname, u.email, u.role)}
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
      
      let result : QueryResult = await client.query(
        `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
        FROM projectzero.users INNER JOIN projectzero."Role" ON users."role" = "Role".roleid
        WHERE users.userID = $1;`, [id]
      );
      return result.rows.map(
        (u)=>{return new User(u.userid, u.username, u.password, u.firstname, u.lastname, u.email, u.role)}
      )[0];
    } catch (e) {
      throw new Error(`Failed to update user in DB: ${e.message}`);
    } finally {
      client && client.release();
    }
  }