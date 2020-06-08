import React from 'react';
import {User} from './model/user'
import { Navbarcomp } from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LoginComponent } from './components/LoginComponent';
import { UserDisplay } from './components/userDisplay';
import { AllUserDisplay } from './components/AllUserDisplay';
import { GetUserComponent } from './components/GetUserComponent';
import { ReimbursementDisplay } from './components/reimbursementDisplay';
import { PostReimbursementComponent } from './components/newReimbursement';
import {PatchUserComponent} from './components/patchUser'

interface IAppState {
    loggedInUser: User | null;
  }

export class App extends React.Component<any, IAppState> {

    constructor(props: any) {
      super(props);
      this.state = {
        loggedInUser: null,
      }}

    updateUser = (user:User) => {
        this.setState({
          loggedInUser: user,
        })
    }

    clearLogin = () => {
      this.setState ({
        loggedInUser: null
      })
  }

    render() {
        return (
            <div style={{marginLeft: 50, marginTop: 50}}>
            <h1>ERS Client</h1>
            <h2>
              Hello {this.state.loggedInUser ?
             this.state.loggedInUser.firstName + ' ' + this.state.loggedInUser.lastName :
              'guest'}
            </h2>
            <Router>
                <Navbarcomp loggedInUser={this.state.loggedInUser} logoutUser ={this.clearLogin}/>
                <Switch>
                    <Route exact path="/">
                      {!this.state.loggedInUser ? (
                        <Redirect to="/login" />
                      ) : (
                        <></>
                      )}
                    </Route>
                    <Route path="/home">
                      <h2>
                        Welcome{" "}
                        {(this.state.loggedInUser) && this.state.loggedInUser.role == 'Finance-Manager' ? `home manager,`
                        : this.state.loggedInUser?`home, ${this.state.loggedInUser.userName}!`
                        : "guest!"}
                      </h2>
                    </Route>
                    <Route path='/login'> <LoginComponent updateUser={this.updateUser}/>
                    {this.state.loggedInUser ?
                     <Redirect to="/home"></Redirect>:<></>}
                     </Route>
                    <Route path='/users' render={(props)=>{return <UserDisplay loggedInUser = {[this.state.loggedInUser]} />}} />
                    <Route path='/pusers' render={(props)=>{return <PatchUserComponent loggedInUser = {this.state.loggedInUser} logoutUser = {this.clearLogin} />}} />
                    <Route path='/allusers' render={(props)=>{return <AllUserDisplay loggedInUser={this.state.loggedInUser} />}} />
                    <Route path='/reimbursements'> <ReimbursementDisplay loggedInUser={this.state.loggedInUser}/></Route>
                    <Route path='/newreimbursements'> <PostReimbursementComponent loggedInUser={this.state.loggedInUser}/></Route>
                    <Route>
                        {!this.state.loggedInUser ? <Redirect to="/login" /> :<></> }
                    </Route>
                </Switch>
            </Router>
            <h4>{!this.state.loggedInUser ? 'Please login before proceeding.' : ''}</h4>
            </div>
        )
        
    }

}