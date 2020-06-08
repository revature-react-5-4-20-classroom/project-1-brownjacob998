import React from 'react';
import { Reimbursement } from '../model/reimbursement';
import { Container, Row, Col, Spinner } from "reactstrap";
import { getReimByUser  } from '../apis/ERSClient';
import { QuickTable } from './QuickTable';
import {ObjectTable} from "./object-table"
import { GetUserReimsComponent } from './GetUserReimsComponent';
import { GetReimsByStatus } from './GetReimsByStatus';
import { PatchReimbursementComponent } from './patchReimbursement';
import { User } from '../model/user';

interface IReimDisplayState {
  reim: Reimbursement[];
  loggedInUser: User,
  reimLoaded: boolean,
  isError: boolean;
  errorMessage: string;
}
export class ReimbursementDisplay extends React.Component<any, IReimDisplayState> {

  constructor(props: any) {
    super(props);
    this.state = {
      reim: [],
      loggedInUser: this.props.loggedInUser,
      reimLoaded: false,
      isError: false,
      errorMessage: '',
    }
  }

  updateReims = (Reim:Reimbursement[]) => {
    this.setState({
      reim: Reim,
    })
  } 

  async componentDidMount() {
    try {
      this.setState({
        loggedInUser: this.props.loggedInUser,
        reim: await getReimByUser(this.props.loggedInUser.userID),
        reimLoaded: true
      })
    } catch (e) {
      // We set the error information in our state.
      // This will let us render something about the error to the end user
      this.setState({
        isError: true,
        errorMessage: e.message,
      })
    }
  }

  clearError = () => {
    this.setState({
      isError: false,
      errorMessage: '',
    });
  }

  render() {
    if(!this.state.isError) {
      return (
        <Container>
          <Row>
          {/*(this.state.loggedInUser) ?
            <Col md={{ size: 8 }}>
              {(this.state.loggedInUser.role == 'Finance-Manager') ?<h4>User Information</h4>:<h4>Your Information</h4>}
                <QuickTable rows={this.state.reim.map((r:Reimbursement)=>{return `${r.reimID} ${r.author} ${r.amount} ${r.dateSubmitted} ${r.dateResolved} ${r.resolver} ${r.status} ${r.type}`})}/>
          </Col>:<></>*/}
          {(this.state.loggedInUser) && this.state.loggedInUser.role == 'Finance-Manager' ?
            <Col>
               <h4>Get User's Reimbursements</h4>
               <GetUserReimsComponent updateReims = {this.updateReims}/> 
               <h4>Get Reimbursements by Status</h4>
               <GetReimsByStatus updateReims = {this.updateReims}/>
               <h4>Update Reimbursement Status by ReimID</h4>
               <PatchReimbursementComponent updateReims = {this.updateReims}/>  
            </Col>:<></>}
          {(this.state.reimLoaded) ?
            <Col md={{ size: 8 }}>
              {(this.state.loggedInUser.role == 'Finance-Manager') ?<h4>User Information</h4>:<h4>Your Information</h4>}
                <ObjectTable objects={this.state.reim}/>
          </Col>:<></>}
          </Row>
        </Container>
      );
    } else {
      return <h3>Error retrieving users: {this.state.errorMessage}</h3>
    }
  }
}
