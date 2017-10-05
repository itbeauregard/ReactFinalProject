import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loginscreen from './Loginscreen'

export class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
    let self = this;
    console.log(this.props.credentials)
    axios({
      method: 'delete',
      url: 'http://localhost:4741/sign-out/' + this.props.credentials.state.id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      }
    })
    .then(function(response) {
        // promise that handles the results of the ajax request
        // if http response is successful
        if (response.status === 204) {
          // TODO: how do I set the state in a parent component
          // need to set the state of the user across the whole front end
          self.props.credentials.setState({
            token: null,
            id: null
          })
          let loginPage = []
          loginPage.push(<Loginscreen parentContext={self.props.appContext} />)
          self.props.appContext.setState({
            loginPage: loginPage,
            uploadScreen: []
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
