import express, {Request, Response, NextFunction} from 'express';

// let GET requests in from Finance Managers, let POST/other requests in if the user is admin
export const authUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.baseUrl)
  console.log(req.path)
  if(req.method === 'GET') { //FMs have the only access to user GETS
    if (req.session && req.session.user && req.session.user.role == 'Finance-Manager'){
      next();
    } else if (req.session && req.session.user && req.path.toString().split('/').pop() == req.session.user.userID) { //Allow hole for users to view their own information
      next()
    } else if (req.session && req.session.user){ //Deny to anyone else
      res.status(401).send(`The ${req.method} is unavailable to non-FMs`)
    } else { //Ask to login if session doesnt't exist
      res.status(401).send('Please login to the appropriate role for this request')
    }
  }
  if(req.method === 'PATCH') { //FMs have the only access to user GETS
    if (req.session && req.session.user && req.session.user.role == 'Administrator'){
      next();
    } else if (req.session && req.session.user && req.body.id == req.session.user.userID) { //Allow hole for users to view their own information
      next()
    } else if (req.session && req.session.user){ //Deny to anyone else
      res.status(401).send(`The ${req.method} is unavailable to non-Admins`)
    } else { //Ask to login if session doesnt't exist
      res.status(401).send('Please login to the appropriate role for this request')
    }
  }
  else if (req.method === 'POST') { //Admins have access to post/patch
    if (req.session && req.session.user && req.session.user.role == 'Administrator'){
      next();
    } else if (req.session && req.session.user){ //Deny to everyone else
      res.status(401).send(`The ${req.method} is unavailable to non-Admins`)
    } else { // Ask for login if session doesnt exist
      res.status(401).send('Please login to the appropriate role for this request')
    }
  } else if(!req.session || !req.session.user) {
    res.status(401).send(`Cannot ${req.method} unless you first login`);
  } else {
    next();
  }
}

export const authReimMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.baseUrl)
  console.log(req.path.toString().substring(0,5))
  if(req.session && req.session.user && req.session.user.role == 'Finance-Manager') { //FM authentication is full access to reimbursements
      next();
  } else if (req.session && req.session.user && req.method === 'POST') { //Everyone has access to post
      next()
  } else if (req.session && req.session.user &&
     req.path.toString().substring(0,5) ==='/user' &&
      req.path.toString().split('/').pop() == req.session.user.userID) { //Allow hole for users to get their own reimbursements.
      next()
  } else if (req.session && req.session.user){ //Deny any non-fms for anything else (Patch)
    res.status(401).send(`The ${req.method} is unavailable to non-FMs`)
  } else if (!req.session || !req.session.user) { //Ask to login if session doesnt exist
    res.status(401).send(`Please login before attempting a request.`)
  } else {
    next()
  }
}