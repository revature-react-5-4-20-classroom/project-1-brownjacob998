import React from 'react';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { newReim } from '../apis/ERSClient';

//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.

interface IReimComponentState {
  description: string,
  amount: number,
  type: string,
  isError: boolean;
  errorMessage: string;
}

export class PostReimbursementComponent extends React.Component<any, IReimComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      amount: 0,
      description: "",
      type: "Other",
      isError: false,
      errorMessage: '',
    }
  }

  //We'll need a few functions to modify individual pieces of our state
  // These take change events
  setDesc = (un: any) => {
    this.setState({
      description: un.currentTarget.value,
    })
  }
  setType = (un: any) => {
    this.setState({
      type: un.currentTarget.value,
    })
  }
  setAmount = (un: any) => {
    this.setState({
      amount: un.currentTarget.value,
    })
  }
  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }

  attemptPost = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      const reims = await newReim(this.state.amount, this.state.description, this.state.type);
      alert("Reimbursement posted successfully")
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
      <Form onSubmit={this.attemptPost}>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter Amount to be Reimbursed</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setAmount} value={this.state.amount} type="number" name="ID" id="id" placeholder="input amount" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="desc" sm={8}>Enter Description</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setDesc} value={this.state.description} type="text" name="desc" id="desc" placeholder="Input Description" />
            </Col>
        </FormGroup>
        <FormGroup>
            <Label for="desc">Enter Expense Type</Label>
            <div>
            <select value ={this.state.type} onChange={this.setType}>
              <option value="Lodging">Lodging</option>
              <option selected value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
            </div>
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
  }}