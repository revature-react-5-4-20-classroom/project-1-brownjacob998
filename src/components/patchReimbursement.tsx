import React from 'react';
import { User } from '../model/user';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { updateReim } from '../apis/ERSClient';
import { UserDisplay } from './userDisplay';

//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.

interface IReimComponentState {
  id: number,
  status:string,
  isError: boolean;
  errorMessage: string;
}

export class PatchReimbursementComponent extends React.Component<any, IReimComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      id: 0,
      status: "Pending",
      isError: false,
      errorMessage: '',
    }
  }

  //We'll need a few functions to modify individual pieces of our state
  // These take change events
  setID = (un: any) => {
    this.setState({
      id: un.currentTarget.value,
    })
  }
  setStatus = (un: any) => {
    this.setState({
      status: un.currentTarget.value,
    })
  }
  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }

  attemptPatch = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      const reims = await updateReim(this.state.id, this.state.status);
      this.props.updateReims(reims)
    } catch (error) {
      this.setState({
        isError: true,
        errorMessage: error.message,
      })
    }
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.attemptPatch}>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter Reim ID to update and Status ID to update to</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setID} value={this.state.id} type="number" name="ID" id="id" placeholder="input ID" />
            </Col>
        </FormGroup>
        <FormGroup>
            <select value ={this.state.status} onChange={this.setStatus}>
              <option value="Approved">Approved</option>
              <option selected value="Pending">Pending</option>
              <option value="Denied">Denied</option>
            </select>
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
      <Toast isOpen={this.state.isError}>
        <ToastHeader icon="danger" toggle={this.clearError}>
          Error!
        </ToastHeader>
        <ToastBody>
          {this.state.errorMessage}
        </ToastBody>
      </Toast>
      </div>
    );
  }

}