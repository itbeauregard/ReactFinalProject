import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AdminButtons } from './AdminButtons';

export class AdminScreen extends Component {

  // TODO: Have a menu with create, update, delete, and get action options
  render() {
    const style = { margin: 12 }
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          <AdminButtons
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
