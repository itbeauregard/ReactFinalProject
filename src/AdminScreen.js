import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { QuestionCreator } from './QuestionCreator';

export class AdminScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          <QuestionCreator
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
