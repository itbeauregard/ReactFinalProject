import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { QuestionCreator } from './QuestionCreator';
import RaisedButton from 'material-ui/RaisedButton';
import { QuestionTableScreen } from './QuestionTableScreen';
import axios from 'axios';
import { host } from './server';

export class AdminScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.getAllQuestionsClick = this.getAllQuestionsClick.bind(this);
    this.createQuestionClick = this.createQuestionClick.bind(this);
  }

  getAllQuestionsClick() {
    let self = this;
    axios({
      url: host + '/questions',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      }
    })
    .then(function(response) {
      const data = response.data;
      self.props.appContext.setState({
        uploadScreen: <QuestionTableScreen
                        data={data}
                        appContext={self.props.appContext}
                        credentials={self.props.credentials}
                      />
      })
    })
    .catch(function(err) {
      console.error(err)
    })
  }

  createQuestionClick() {
    this.props.appContext.setState({
      uploadScreen: <QuestionCreator
                      appContext={this.props.appContext}
                      credentials={this.props.credentials}
                    />
    })
  }

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
          <RaisedButton
            label="See all Questions"
            secondary={true}
            style={style}
            onClick={this.getAllQuestionsClick}
          />
          <RaisedButton
            label="Create Question"
            primary={true}
            style={style}
            onClick={this.createQuestionClick}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
