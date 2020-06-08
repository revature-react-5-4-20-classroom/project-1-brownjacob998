import React from 'react';
import { User } from '../model/user';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { getUser, getReimByStatus } from '../apis/ERSClient';
import { UserDisplay } from './userDisplay';

//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.

interface IReimComponentState {
  id: number,
  isError: boolean;
  errorMessage: string;
}

export class GetReimsByStatus extends React.Component<any, IReimComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      id: 2,
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

  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }

  attemptRetrieval = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      const reims = await getReimByStatus(this.state.id);
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
      <Form onSubmit={this.attemptRetrieval}>
        <FormGroup row>
          <Label for="ID" sm={8}>Select option for Status type retrieval</Label>
        </FormGroup>
        <FormGroup>
            <select value ={this.state.id} onChange={this.setID}>
              <option value="1">Approved</option>
              <option selected value="2">Pending</option>
              <option value="3">Denied</option>
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