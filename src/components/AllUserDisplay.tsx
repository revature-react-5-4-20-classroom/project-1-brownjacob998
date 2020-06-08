import React from 'react';
import { User } from '../model/user';
import { Container, Row, Col, Spinner } from "reactstrap";
import { getAllUsers, getUser } from '../apis/ERSClient';
import { ObjectTable } from './object-table';
import { GetUserComponent } from './GetUserComponent';

interface IUserDisplayState {
  users: User[];
  loggedInUser: User;
  userLoaded: boolean;
  isError: boolean;
  errorMessage: string;
}

export class AllUserDisplay extends React.Component<any, IUserDisplayState> {

  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      loggedInUser: this.props.loggedInUser,
      userLoaded: false,
      isError: false,
      errorMessage: '',
    }
  }

  updateUsers = (user:User[]) => {
    this.setState({
      users: user,
    })
  } 

  async componentDidMount() {
    try {
      this.setState({
        users: await getAllUsers(),
        userLoaded: true
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
          {(this.state.userLoaded) ?
            <Col md={{ size: 8 }}>
              {(this.state.loggedInUser.role == 'Finance-Manager') ?<h4>User Information</h4>:<h4>Your Information</h4>}
                <ObjectTable objects={this.state.users}/>
            </Col>:<></>}
          </Row>
        </Container>
      );
    } else {
      return <h3>Error retrieving users: {this.state.errorMessage}</h3>
    }
  }
}
