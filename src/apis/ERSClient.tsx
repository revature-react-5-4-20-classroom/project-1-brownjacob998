import axios from 'axios';
import { Reimbursement } from '../model/reimbursement';
import { User } from '../model/user';
import { FailedLoginError } from '../errors/FailedLoginError';

const ERSClient = axios.create({
    baseURL: 'http://54.196.11.203:3001',
    // If you don't have the following line, your login won't work!
    withCredentials: true,
  });

  export async function login(un: string, pw: string): Promise<User> {
    try {
      const response = await ERSClient.post('/login', {username: un, password: pw});
      let user: User = response.data;
      return user;
    } catch (e) {
      if(e.response.status === 401) {
        throw new FailedLoginError('Failed to authenticate', un);
      } else {
        // We could throw a different custom error, this exposes a little too much to the user.
        throw e;
      }
    }
    
  }
  export async function getAllUsers() : Promise<User[]> {
    const response = await ERSClient.get('/users');
    return response.data.map((userObj: any) => {
      const {userID, userName, password, firstName, lastName, email, role} = userObj;
      return new User(userID, userName, password, firstName, lastName, email, role);
    });
  }
  export async function getUser(id: number) : Promise<User[]> {
    const response = await ERSClient.get(`/users/${id}`);
    return response.data.map((userObj: any) => {
      const {userID, userName, password, firstName, lastName, email, role} = userObj;
      return new User(userID, userName, password, firstName, lastName, email, role);
    });
  }
  export async function updateUser(userid: number, pword: string, fName: string, lName:string, Email:string) : Promise<User[]> {
    const response = await ERSClient.patch("/users", {id: userid, username: null, password: pword, firstname: fName, lastname:fName, email: Email, role: null});
    let user
    const {userID, userName, password, firstName, lastName, email, role} = response.data;
    return (user = [new User(userID, userName, password, firstName, lastName, email, role)]);
    ;
  }
  export async function getReimByUser(id: number) : Promise<Reimbursement[]> {
    const response = await ERSClient.get(`/reimbursements/user/${id}`);
    return response.data.map((reimObj: any) => {
      const {reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = reimObj;
      return new Reimbursement(reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
    });
  }
  export async function getReimByStatus(id: number) : Promise<Reimbursement[]> {
    const response = await ERSClient.get(`/reimbursements/status/${id}`);
    return response.data.map((reimObj: any) => {
      const {reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = reimObj;
      return new Reimbursement(reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
    });
  }
  export async function updateReim(reimid: number, statuss: string) : Promise<Reimbursement[]> {
    const response = await ERSClient.patch("/reimbursements", {id: reimid, status: statuss });
    let reim
    const {reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = response.data;
    return (reim = [new Reimbursement(reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type)]);
    ;
  }
  export async function newReim(ammount: number, Description: string, Type: string) : Promise<Reimbursement[]> {
    const response = await ERSClient.post("/reimbursements", {amount: ammount, description: Description, type: Type });
    let reim
    const {reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = response.data;
    return (reim = [new Reimbursement(reimID, author, amount, dateSubmitted, dateResolved, description, resolver, status, type)]);
    ;
  }