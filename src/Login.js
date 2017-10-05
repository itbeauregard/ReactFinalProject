import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UploadScreen from './UploadScreen';
import { host } from './server';
import { AdminScreen } from './AdminScreen';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state= {
      username:'',
      password:'',
      token: '',
      id: '',
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

handleClick(event) {
    var self = this;
    axios({
      method: 'post',
      url: host + '/sign-in',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "credentials": {
          "username": this.state.username,
          "password": this.state.password
        }
      }
    })
      .then(function(response) {
          console.log(response.data.user.token);
          if (response.status === 200) {
            console.log("Login successfull");
            self.setState({
              token: response.data.user.token,
              id: response.data.user.id
            })
            var uploadScreen = [];
            if (response.data.user.username === 'admin') {
              uploadScreen.push(
                <AdminScreen
                  credentials={self}
                  appContext={self.props.appContext}
                />)
            } else {
              uploadScreen.push(
                <UploadScreen
                  credentials={self}
                  appContext={self.props.appContext}
                />)
            }
            self.props.appContext.setState({
              loginPage: [],
              uploadScreen: uploadScreen
            })
          }
            else if (response.status === 204) {
              console.log("Username password do not match");
              alert("username password do not match")
            } else {
              console.log("Username does not exists");
              alert("Username does not exist");
            }
          })
        .catch(function(error) {
          console.log(error);
        });
      }

handleProfile(event) {
  console.log("go to profile page")
}

handleSignOut(event) {
  console.log("sign out page")
}

handleToggle() {
  this.setState({
    open: !this.state.open
  })
}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
             onClick={this.handleToggle}
             children={
               <Drawer open={this.state.open}>
                 <MenuItem>About Monument</MenuItem>
               </Drawer>
             }
           />
           <h1>[ Monument ]</h1>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
