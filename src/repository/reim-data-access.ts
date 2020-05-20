import { User } from '../model/user';
import { Reimbursement } from '../model/reimbursement';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from '.';

export async function getReimByStatusID(id: number): Promise<Reimbursement[]> {
  let client : PoolClient;
  client = await connectionPool.connect();
  try {
    let result : QueryResult;
    result = await client.query(
        `SELECT reimbursement.reimbursementid, users.firstname || ' ' || users.lastname as "name", reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description,
        reimbursement.resolver, status.status, "Type"."type"
         from projectzero.reimbursement, projectzero.users, projectzero.status, projectzero."Type" where reimbursement.author = users.userID AND 
         reimbursement."type" = "Type".typeID AND reimbursement.status = $1 AND status.statusID = reimbursement.status;`,[id]
    );
    console.log(result)
    return result.rows.map((r) => {
      return new Reimbursement(r.reimbursementid, r.name, r.amount, r.datesubmitted, r.dateresolved, r.description, r.resolver, r.status, r.type);
    });
  } catch(e) {
    throw new Error(`Failed to query for all users: ${e.message}`);
  } finally {
    client && client.release();
  }
}

export async function getReimByUserID(id: number) : Promise<Reimbursement[]> {
    let client : PoolClient;
    client = await connectionPool.connect();
    try {
        let result : QueryResult;
        result = await client.query(
            `SELECT reimbursement.reimbursementid, users.firstname || ' ' || users.lastname as "name", reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description,
            reimbursement.resolver, status.status, "Type"."type"
             from projectzero.reimbursement, projectzero.users, projectzero.status, projectzero."Type" where reimbursement.author = $1 AND reimbursement.author = users.userID AND 
             reimbursement."type" = "Type".typeID AND status.statusID = reimbursement.status;`, [id]
        );
        return result.rows.map((r) => {
        return new Reimbursement(r.reimbursementid, r.name, r.amount, r.datesubmitted, r.dateresolved, r.description, r.resolver, r.status, r.type);
        });
    } catch(e) {
        throw new Error(`Failed to query for user: ${e.message}`);
    } finally {
        client && client.release();
    }
}

export async function addNewReim(author: number, amount: number, description: String, dateSubmitted: Date, type: String) : Promise<Reimbursement> {
  let client : PoolClient = await connectionPool.connect();
  let typeR = undefined;
  try {
    const statusResult : QueryResult = await client.query(
      `SELECT * FROM projectzero.status WHERE status.status LIKE 'Pending';`
    );
    const status = statusResult.rows[0].statusid;
    if (type) {
    const typeResult : QueryResult = await client.query(
        `SELECT * FROM projectzero."Type" WHERE "Type"."type" = $1;`, [type]
      );
    typeR = typeResult.rows[0].typeid;
    } else {
        typeR = 4 //Other in DB
    }

    let insertUserResult : QueryResult = await client.query(
      `INSERT INTO projectzero.reimbursement (author, amount, dateSubmitted, description, "type", status) VALUES
      ($1, $2, $3, $4, $5, $6);`, [author, amount, dateSubmitted, description, typeR, status]
    )
    
    let result : QueryResult = await client.query(
      `SELECT reimbursement.reimbursementid, users.firstname || ' ' || users.lastname as "name", reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description,
      reimbursement.resolver, status.status, "Type"."type"
       from projectzero.reimbursement, projectzero.users, projectzero.status, projectzero."Type" where reimbursement.author = $1 AND reimbursement.author = users.userID AND 
       reimbursement.dateSubmitted = $2 AND reimbursement."type" = "Type".typeID AND status.statusID = reimbursement.status;`, [author, dateSubmitted]
    );
    console.log(result)
    return result.rows.map(
      (r)=>{return new Reimbursement(r.reimbursementid, r.name, r.amount, r.datesubmitted, r.dateresolved, r.description, r.resolver, r.status, r.type)}
    )[0];
  } catch (e) {
    throw new Error(`Failed to submit new reimbursement to DB: ${e.message}`);
  } finally {
    client && client.release();
  }
}

export async function updateReim(id: number, author: number, amount: number, dateSubmitted: Date, dateResolved: Date, description: string, resolver:number
    , status:String, type: String) : Promise<Reimbursement> {
    let client : PoolClient = await connectionPool.connect();
    let typeid = null;
    try {
        const statusResult : QueryResult = await client.query(
            `SELECT * FROM projectzero.status WHERE status.status LIKE $1 ;`, [status]
          );
          const statusid = statusResult.rows[0].statusid;
          if (type) {
          const typeResult : QueryResult = await client.query(
              `SELECT * FROM projectzero."Type" WHERE "Type"."type" = $1;`, [type]
            );
          typeid = typeResult.rows[0].typeid;
          } else {
              typeid = 4 //Other in DB
          }
          if (!dateResolved && (statusid === 1 || statusid === 3)) { //If status is not pending, and date doesn't exist, set dateResolved to time of patch request
            dateResolved = new Date()
          }

      let updateResult : QueryResult = await client.query(`
        UPDATE projectzero.reimbursement SET
        author = COALESCE($1, author),
        amount= COALESCE($2, amount),
        dateSubmitted = COALESCE($3, dateSubmitted),
        dateResolved = COALESCE($4, dateResolved),
        description = COALESCE($5, description),
        resolver = COALESCE($6, resolver),
        status = COALESCE($7, status), 
        "type" = COALESCE($8, "type")  
        WHERE reimbursement.reimbursementID = $9;`, [author, amount, dateSubmitted, dateResolved, description, resolver, statusid, type, id]
      )
      
      let result : QueryResult = await client.query(
        `SELECT reimbursement.reimbursementid, users.firstname || ' ' || users.lastname as "name", reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description,
        reimbursement.resolver, status.status, "Type"."type"
         from projectzero.reimbursement, projectzero.users, projectzero.status, projectzero."Type" where reimbursement.reimbursementid = $1 AND reimbursement.author = users.userID AND 
         reimbursement."type" = "Type".typeID AND status.statusID = reimbursement.status;`, [id]
      );
    console.log(result)
      return result.rows.map(
        (r)=>{return new Reimbursement(r.reimbursementid, r.name, r.amount, r.datesubmitted, r.dateresolved, r.description, r.resolver, r.status, r.type)}
    )[0];
    } catch (e) {
      throw new Error(`Failed to update user in DB: ${e.message}`);
    } finally {
      client && client.release();
    }
  }