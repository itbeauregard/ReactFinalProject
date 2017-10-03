import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class UploadScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
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
          <AppBar
             title="Home"
             onClick={this.handleToggle}
             children={
               <Drawer open={this.state.open}>
                 <MenuItem>Profile</MenuItem>
                 <MenuItem>Sign Out</MenuItem>
               </Drawer>
             }
           />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default UploadScreen;
