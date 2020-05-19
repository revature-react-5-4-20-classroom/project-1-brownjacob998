import express, { Router, Request, Response, NextFunction } from 'express';
import { User } from '../model/user';
import { authUserMiddleware } from '../middleware/authMiddleWare';
import { getAllUsers, addNewUser, getUserById, updateUser } from '../repository/user-data-access';

export const userRouter: Router = express.Router();


userRouter.use(authUserMiddleware);


userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
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
        res.status(201)
        res.json(await addNewUser(username, password, firstname, lastname, email, role));
    } else {
        res.status(400).send('Please include all required fields.');
    }
});

userRouter.patch('/', async (req: Request, res: Response) => {
    let user = req.body //Create new object from body fields.
    let id = user.id //This should always exist in a proper request
    let username = user.username || null //Check for the field, or set to null for SQL statement
    let password = user.password || null //^
    let firstname = user.firstname || null //^
    let lastname = user.lastname || null //^
    let email = user.email || null //^
    let role = user.role || null //^
    console.log(req.body)
    if(id) {
        res.status(202)
        res.json(await updateUser(id, username, password, firstname, lastname, email, role)); //Send to Update User function
    } else {
        res.status(400).send('Please include an ID.');
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
