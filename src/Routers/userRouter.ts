import express, { Router, Request, Response, NextFunction } from 'express';
import { User } from '../model/user';
import { authUserMiddleware, authRoleFactory } from '../middleware/authMiddleWare';
import { getAllUsers, addNewUser, getUserById, updateUser } from '../repository/user-data-access';

export const userRouter: Router = express.Router();

//Apply our Admin Middleware on userRouter
userRouter.use(authUserMiddleware);

// have an async callback to work with our asynchronous data access
userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
  // get all users, using async/await
  const users : User[] = await getAllUsers();
  res.json(users);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/', async (req: Request, res: Response) => {
    let {username, password, firstname, lastname, email, role} = req.body;
    console.log(req.body)
    if(username && password && firstname && lastname && email && role) {
        await addNewUser(username, password, firstname, lastname, email, role);
        res.sendStatus(202);
    } else {
        res.status(400).send('Please include required fields.');
    }
});

userRouter.patch('/', async (req: Request, res: Response) => {
    let user = req.body
    let id = user.id
    let username = user.username || null
    let password = user.password || null
    let firstname = user.firstname || null
    let lastname = user.lastname || null
    let email = user.email || null
    let role = user.role || null
    console.log(req.body)
    if(id) {
        await updateUser(id, username, password, firstname, lastname, email, role);
        res.sendStatus(201);
    } else {
        res.status(400).send('Please include required fields.');
    }
});


userRouter.get('/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;
  let user: User[];
  if(isNaN(id)) {
    res.status(400).send('Must include numeric id in path');
  } else {
    user = await getUserById(id)
    res.json(user);
  }
});
