import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      username:'',
      password:'',
      password_confirm: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4741";
    console.log("values", this.state.name, this.state.username, this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload = {
      "credentials": {
        "name": this.state.name,
        "username": this.state.username,
        "password": this.state.password,
        "password_confirm": this.state.password_confirm
      }
    }
    axios({
      method: 'post',
      url: apiBaseUrl + '/sign-up',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "credentials": {
          "name": this.state.name,
          "username": this.state.username,
          "password": this.state.password,
          "password_confirm": this.state.password_confirm
        }
      }
    })
      .then(function(response) {
          console.log(response);
          if (response.data.code == 200) {
            //  console.log("registration successfull");
            var loginscreen = [];
            loginscreen.push( < Login parentContext = {
                this
              }
              />);
              var loginmessage = "Not Registered yet.Go to registration"; self.props.parentContext.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
              });
            }
          })
        .catch(function(error) {
          console.log(error);
        });

  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
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
           <TextField
             type="password"
             hintText="Confirm your Password"
             floatingLabelText="Confirm Password"
             onChange = {(event,newValue) => this.setState({password_confirm:newValue})}
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
export default Register;
