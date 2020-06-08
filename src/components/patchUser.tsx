import React from 'react';
import { User } from '../model/user';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { updateUser } from '../apis/ERSClient';
import { UserDisplay } from './userDisplay';

//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.
//These are any because string | null throws an error in the form
interface IUserComponentState { 
  firstName: any,
  lastName: any,
  email:any,
  password: any,
  loggedInUser: User,
  isError: boolean;
  errorMessage: string;
}

export class PatchUserComponent extends React.Component<any, IUserComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: this.props.loggedInUser,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      isError: false,
      errorMessage: '',
    }
  }

  //We'll need a few functions to modify individual pieces of our state
  // These take change events
  setFirst = (un: any) => {
    this.setState({
      firstName: un.currentTarget.value,
    })
  }
  setLast = (un: any) => {
    this.setState({
      lastName: un.currentTarget.value,
    })
  }
  setEmail = (un: any) => {
    this.setState({
      email: un.currentTarget.value,
    })
  }
  setPass = (un: any) => {
    this.setState({
      password: un.currentTarget.value,
    })
  }
  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }
  //Username not included because it has to be unique. ID included for referencing in DB
  attemptPatch = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      const users = await updateUser(this.state.loggedInUser.userID, this.state.password, this.state.firstName, this.state.lastName, this.state.email);
      this.props.logoutUser()
      alert("User update successfully, please log back in")
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
        <h4>Leave fields blank if they shouldn't be updated</h4>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter new First Name</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setFirst} value={this.state.firstName} type="text" name="ID" id="id" placeholder="name"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter new Last Name</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setLast} value={this.state.lastName} type="text" name="ID" id="id" placeholder="name"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter new email</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setEmail} value={this.state.email} type="text" name="ID" id="id" placeholder="email"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter new password</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setPass} value={this.state.password} type="password" name="ID" id="id" placeholder=""/>
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