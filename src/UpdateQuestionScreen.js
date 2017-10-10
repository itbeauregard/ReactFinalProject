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

export class QuestionTableScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: props.data.questions.location,
      ask: props.data.questions.ask,
      first_choice: props.data.questions.first_choice,
      second_choice: props.data.questions.second_choice,
      third_choice: props.data.questions.third_choice,
      fourth_choice: props.data.questions.fourth_choice,
      fifth_choice: props.data.questions.fifth_choice,
      correct_choice: props.data.questions.correct_choice
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let self = this;
    axios({
      url: host + '/questions/' + self.state.id,
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      },
      data: {
        'questions': {
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
            onChange = {(event,newValue) => this.setState({question:newValue})}
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
