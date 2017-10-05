import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import { QuestPage } from './QuestPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class UploadScreen extends Component {
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
          <QuestPage
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default UploadScreen;
