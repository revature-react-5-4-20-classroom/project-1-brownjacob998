import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Collapse, Button, NavbarText, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {User} from '../model/user'

interface ITopNavProps {
    logoutUser: ()=>void;
    loggedInUser: User | null
}
export const Navbarcomp = (props:ITopNavProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    let styles = {
        marginRight: '20px'
    };
    return (
      <div>
        <Navbar color="light" light expand="md">
        <span style={styles} className="style"/>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/home" style={{ marginRight: 10}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink hidden={!!props.loggedInUser} to="/login" className="nav-link" activeClassName="active" style={{ marginRight: -5 }}>Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Users
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/users">Get User Info</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/pusers">Update User Info</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink hidden={!(props.loggedInUser && props.loggedInUser.role == 'Finance-Manager')}to="/allusers" className="nav-link" activeClassName="active">Get All Users</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Reimbursements
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/reimbursements">Get Reimbursement Info</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/newreimbursements">Submit New Reimbursement</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavItem tag={()=>{return <Button  hidden={!props.loggedInUser} onClick={props.logoutUser} color="secondary" outline>Logout <Redirect to="/login"></Redirect></Button>}} />
          </Collapse>
        </Navbar>
      </div>
    );
  }