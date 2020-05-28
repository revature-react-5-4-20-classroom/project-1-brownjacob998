import express from 'express';
import bodyparser from 'body-parser';
import {Application, Request, Response} from 'express';
import * as USERS from './model/user';
import * as RBM from './model/reimbursement';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from "./repository";
import { userRouter} from "./Routers/userRouter";
import { loggingMiddleware } from "./middleware/loggingMiddleWare"
import { sessionMiddleware } from "./middleware/sessionMiddleWare";
import { reimRouter } from './Routers/reimRouter';
import {corsFilter} from './middleware/corsFilter'

const app: Application = express();
app.use(bodyparser.json())
app.use(sessionMiddleware)
app.use(loggingMiddleware)
//
app.post('/login', async (req: Request, res: Response) => {
    const {username, password} = req.body;
    let client : PoolClient;
    let user:USERS.User;
     client = await connectionPool.connect();
    if (!username || !password) {
        res.status(400).send('Invalid Credentials');
    } else {
        try {
            
            let result : QueryResult;
            result = await client.query(
            `SELECT users.userid, users.username, users.password, users.firstname, users.lastname, users.email, "Role"."role"
            FROM projectzero.users, projectzero."Role" WHERE users."role" = "Role".roleid AND users.username = $1 AND users.password = $2;`,[username, password]
            );
            let user:USERS.User = result.rows.map((u) => {
            return new USERS.User(u.userid, u.username, u.password, u.firstname, u.lastname, u.email, u.role);
            })[0];
            if(req.session) {
                req.session.user = user
            }
            if(user) {
                res.json(user)
            }
            else {
                res.status(400).send('Invalid Credentials')
            }
        } catch(e) {
            throw new Error(`Failed to login: ${e.message}`);
        } finally {
            client && client.release();
        }
    }   
})

app.get('new-endpoint', (req: Request, res: Response) => {
    res.send("Webhooks worked")
})

app.use('/users', userRouter);
app.use('/reimbursements', reimRouter);
app.use(corsFilter)

app.listen(3001, () => {
    console.log('project 0 has started, testing connection');
    
    connectionPool.connect().then(()=> {
        console.log('connected');
    }).catch((err) => {
        console.error(err.message);
    })
})