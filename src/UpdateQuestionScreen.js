import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { TableData } from './TableData';
import { AdminButtons } from './AdminButtons';
import { ChangeQuestion } from './ChangeQuestion';
import axios from 'axios';
import { host } from './server';

export class UpdateQuestionScreen extends Component {
  constructor(props) {
    super(props)
    console.log(props.data)
    this.state = {
      id: props.data.question.id,
      location: props.data.question.location,
      ask: props.data.question.ask,
      first_choice: props.data.question.first_choice,
      second_choice: props.data.question.second_choice,
      third_choice: props.data.question.third_choice,
      fourth_choice: props.data.question.fourth_choice,
      fifth_choice: props.data.question.fifth_choice,
      correct_choice: props.data.question.correct_choice,
      userMessage: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let self = this;
    axios({
      url: host + '/questions/' + this.state.id,
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      },
      data: {
        'question': {
          'location': this.state.location,
          'ask': this.state.ask,
          'first_choice': this.state.first_choice,
          'second_choice': this.state.second_choice,
          'third_choice': this.state.third_choice,
          'fourth_choice': this.state.fourth_choice,
          'fifth_choice': this.state.fifth_choice,
          'correct_choice': this.state.correct_choice
        }
      }
    })
      .then(function(response) {
        self.setState({
          userMessage: 'You successfully updated the question!'
        })
      })
      .catch(function(err) {
        console.error(err)
        self.setState({
          userMessage: 'There was an error updating the question.'
        })
      })
  }


  render() {
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
          <h3>{this.state.userMessage}</h3>
          <TextField
            hintText="Enter Location"
            floatingLabelText="Location"
            value={this.state.location}
            onChange = {(event,newValue) => this.setState({location:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Question"
            floatingLabelText="Question"
            value={this.state.ask}
            onChange = {(event,newValue) => this.setState({ask:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 1"
            value={this.state.first_choice}
            onChange = {(event,newValue) => this.setState({first_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 2"
            value={this.state.second_choice}
            onChange = {(event,newValue) => this.setState({second_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 3"
            value={this.state.third_choice}
            onChange = {(event,newValue) => this.setState({third_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 4"
            value={this.state.fourth_choice}
            onChange = {(event,newValue) => this.setState({fourth_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 5"
            value={this.state.fifth_choice}
            onChange = {(event,newValue) => this.setState({fifth_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Correct Answer"
            floatingLabelText="Correct Answer"
            value={this.state.correct_choice}
            onChange = {(event,newValue) => this.setState({correct_choice:newValue})}
            />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            onClick={(event) => this.handleSubmit(event)}
            />
        </MuiThemeProvider>
      </div>
    )
  }
}
