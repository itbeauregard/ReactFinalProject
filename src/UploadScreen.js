import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import { QuestPage } from './QuestPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class UploadScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      token: props.token,
      open: false
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            token={this.state.token}
            id={this.state.id}
          />
          <QuestPage
            appContext={this.props.appContext}
            token={this.state.token}
            id={this.state.id}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default UploadScreen;
