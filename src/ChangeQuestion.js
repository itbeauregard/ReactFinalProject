import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { QuestionTableScreen } from './QuestionTableScreen';
import { QuestionCreator } from './QuestionCreator';
import axios from 'axios';
import { host } from './server';

export class ChangeQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  handleUpdate(event) {
    event.preventDefault()
    console.log('update this id: ' + this.state.id)
  }

  // Upon deleting the question, fetch all the data again and refresh the
  // QuestionTableScreen
  handleDelete(event) {
    event.preventDefault()
    console.log('delete this id: ' + this.state.id)
    let self = this;
    axios({
      url: host + '/questions/' + self.state.id,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      }
    })
      .then(function() {
        axios({
          url: host + '/questions',
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + this.props.credentials.state.token
          }
        })
        .then(function(response) {
          const data = response.data
          self.props.appContext.setState({
            uploadScreen: <QuestionTableScreen
                            data={data}
                            appContext={self.props.appContext}
                            credentials={self.props.credentials}
                          />
          })
        })
      })
    .catch(function(err) {
      console.error(err)
    })
  }

  render() {
    const style = { margin: 12 }
    return (
      <div>
        <MuiThemeProvider>
          <TextField
            hintText="Enter the question's ID number"
            floatingLabelText="ID"
            onChange = {(event,newValue) => this.setState({id:newValue})}
            />
          <br/>
          <RaisedButton label="Update" primary={true} style={style} onClick={(event) => this.handleUpdate(event)}/>
          <RaisedButton label="Delete" secondary={true} style={style} onClick={(event) => this.handleDelete(event)}/>
        </MuiThemeProvider>
      </div>
    )
  }
}
