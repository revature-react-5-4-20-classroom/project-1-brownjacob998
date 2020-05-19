import express, { Router, Request, Response, NextFunction } from 'express';
import { User } from '../model/user';
import { Reimbursement } from '../model/reimbursement';
import { authReimMiddleware } from '../middleware/authMiddleWare';
import { addNewReim, getReimByStatusID, getReimByUserID, updateReim } from '../repository/reim-data-access';

export const reimRouter: Router = express.Router();

reimRouter.use(authReimMiddleware)
  //Create new reimbursement. Author is defined automatically from session userID, so you cannot make a reimbursement request for someone else.
  reimRouter.post('/', async (req: Request, res: Response) => {
      let {amount, description, type} = req.body;
      let dateSubmitted = new Date() //Get today's date and time. 
      console.log(req.body)
      if (req.session && req.session.user) {
        if(amount && dateSubmitted) {
            res.status(201)
            res.json(await addNewReim(req.session.user.userID, amount, description, dateSubmitted, type));

        } else {
            res.status(400).send('Please include all required fields.');
        }
    } else {
        res.status(401).send('Please login before submitting a reimbursement request')
    }
    
  });
 //Update reimbursements
  reimRouter.patch('/', async (req: Request, res: Response) => {
      let reim = req.body //Create new object from body fields.
      let id = reim.id //This should always exist in a proper request
      let author = reim.author || null //Check for the field, or set to null for SQL statement
      let amount = reim.amount || null //^
      let dateSubmitted = reim.dateSubmitted || null //^
      let dateResolved = reim.dateResolved || null
      let description = reim.description || null //^
      let resolver;
      if (req.session && req.session.user) { //This should be covered by middleware already, but compiler disagrees
      resolver = reim.resolver || req.session.user.userID }//^
      let status = reim.status || null //^
      let type = reim.type || null //^
      console.log(req.body)
      if(id) {
          res.status(202)
          res.json(await updateReim(id, author, amount, dateSubmitted, dateResolved, description, resolver, status, type)); //Send to Update Reim function
      } else {
          res.status(400).send('Please include a Reimbursement ID.');
      }
  });
  
//Get Reimbursements by Status. FMs only.
  reimRouter.get('/status/:statusID', async (req: Request, res: Response) => {
    const id = +req.params.statusID;
    let reim: Reimbursement[];
    if(isNaN(id)) {
      res.status(400).send('Must include numeric id in path');
    } else {
      reim = await getReimByStatusID(id)
      res.status(200)
      res.json(reim);
    }
})
    reimRouter.get('/user/:userID', async (req: Request, res: Response) => { //Get reimbursement by user ID. FM's have access to all, user can access their own.
    let id = +req.params.userID;
    let reim: Reimbursement[];
    if(isNaN(id)) {
      res.status(400).send('Must include numeric id in path');
    } else {
        reim = await getReimByUserID(id)
        res.status(200)
        res.json(reim);
    }
  });