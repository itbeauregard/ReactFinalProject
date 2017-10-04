import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: props.token,
      id: props.id,
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleSignOut() {
    axios({
      method: 'delete',
      url: 'http://localhost:4741/sign-out/' + this.state.id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.state.token
      }
    })
    .then(function(response) {
        // promise that handles the results of the ajax request
        // if http response is successful
        if (response.status === 204) {
          // TODO: how do I set the state in a parent component
          // need to set the state of the user across the whole front end
          this.setState({
            token: null,
            id: null
          })
        }
    })
    .catch(function(error) {
      console.log(error);
    })
  }


  render() {
    return (
      <MuiThemeProvider>
        <AppBar
           title="Home"
           onClick={this.handleToggle}
           children={
             <Drawer open={this.state.open}>
               <MenuItem>Profile</MenuItem>
               <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
             </Drawer>
           }
         />
      </MuiThemeProvider>
     )
   }
}
