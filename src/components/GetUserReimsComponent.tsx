import React from 'react';
import { User } from '../model/user';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { getUser, getReimByUser } from '../apis/ERSClient';
import { UserDisplay } from './userDisplay';

//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.

interface IReimComponentState {
  id: number,
  isError: boolean;
  errorMessage: string;
}

export class GetUserReimsComponent extends React.Component<any, IReimComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      id: 0,
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
      const reims = await getReimByUser(this.state.id);
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
          <Label for="ID" sm={8}>Enter ID for Employee</Label>
          <Col sm={6}>
            {/* onChange lets Input change state, value lets Input display state */}
            <Input onChange={this.setID} value={this.state.id} type="number" name="ID" id="id" placeholder="input ID" />
          </Col>
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