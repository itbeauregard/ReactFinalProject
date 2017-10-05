import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { host } from './server';
import { ChoiceField } from './ChoiceField'

export class QuestionCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      question: '',
      first_choice: '',
      second_choice: '',
      third_choice: '',
      fourth_choice: '',
      fifth_choice: '',
      correct_choice: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: host + '/questions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.token
      },
      data: {
        'question': {
          'location': this.state.location,
          'ask': this.state.question,
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
          <TextField
            hintText="Enter Location"
            floatingLabelText="Location"
            onChange = {(event,newValue) => this.setState({location:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Question"
            floatingLabelText="Question"
            onChange = {(event,newValue) => this.setState({question:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 1"
            onChange = {(event,newValue) => this.setState({first_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 2"
            onChange = {(event,newValue) => this.setState({second_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 3"
            onChange = {(event,newValue) => this.setState({third_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 4"
            onChange = {(event,newValue) => this.setState({fourth_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Answer Choice"
            floatingLabelText="Answer 5"
            onChange = {(event,newValue) => this.setState({fifth_choice:newValue})}
            />
          <br />
          <TextField
            hintText="Enter Correct Answer"
            floatingLabelText="Correct Answer"
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
