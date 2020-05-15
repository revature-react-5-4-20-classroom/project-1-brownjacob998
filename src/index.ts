import express from 'express';
import bodyparser from 'body-parser';
import {Application, Request, Response} from 'express';
import * as USERS from './user';
import * as RBM from './reimbursement';
import { PoolClient} from 'pg';
import { connectionPool } from "./repository";

const app: Application = express();
app.use(bodyparser.json())

//Test Data
const users : USERS.User[] = [
    new USERS.User(1, 'Jbrow', 'abc', 'Jacob', 'Brown','test@gmail.com',1),
    new USERS.User(2, 'pbart', 'def', 'Paul', 'Blart','pbart@gmail.com',2)
]

const reimbursements: RBM.Reimbursement[] = [

]
//
/*
app.get('/', (req: Request, res: Response) => {
    res.redirect('./loginReq')
})
app.get('/loginReq', (req: Request, res: Response) => {
    res.json("Please login first")
})
app.post('/login', (req: Request, res: Response) => {
    
})

app.get('/users', (req: Request, res: Response) => {
    res.json(getAllUsers())
})

app.get('/users/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
        res.status(400).send('Must include numeric id in path')
    } else {
        res.json(getUserByID(id))
    }
})

app.patch('/users', (req: Request, res: Response) => {
    
})

app.get('/reimbursements/status/:statusID', (req: Request, res: Response) => {
    
})

app.get('/reimbursements/author/userID/:userID', (req: Request, res: Response) => {
    
})

app.post('/reimbursements', (req: Request, res: Response) => {
    
})

app.patch('/reimbursements', (req: Request, res: Response) => {
    
})
*/

app.listen(3000, () => {
    console.log('project 0 has started, testing connection');
    let client: PoolClient;
    connectionPool.connect().then(()=> {
        console.log('connected');
    })
})

function getUserByID (id:number): USERS.User {
    return users.filter((user) => {
        return user.userID === id;
    })[0]
}

function getAllUsers(): USERS.User[] {
    return users
}