import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { host } from './server';
import axios from 'axios';


export class Choices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usermessage: '',
      disable: false
    }

    this.correctClick = this.correctClick.bind(this);
    this.wrongClick = this.wrongClick.bind(this);
  }

  correctClick() {
    // disable buttons after correct is selected
    this.setState({
      usermessage: 'Correct!',
      disable: true
    })
    // TODO add user answer table update
    // needed: user id (comes from credentials), question id (the initial get all call),
    // token (from credentials)
    axios({
      method: 'post',
      url: host + '/user_answers',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.credentials.state.token
      },
      data: {
        'user_answer': {
          'user_id': this.props.credentials.state.id,
          'question_id': this.props.question_id,
          'complete': true
        }
      }
    })
  }

  wrongClick() {
    this.setState({
      usermessage: 'Try again.'
    })
  }

  render() {
    let self = this;
    return(
      <div>
        <RadioButtonGroup name='choices'>
            {this.props.choices.map(function(each) {
              // TODO: if the choice is not correct, style red and say try again
              // if choice is correct, style green and say correct
              if (each === self.props.correct) {
                return (<RadioButton
                          disabled={self.state.disable}
                          value={each}
                          label={each}
                          onClick={self.correctClick}
                          />)
              } else {
                return (<RadioButton
                          disabled={self.state.disable}
                          value={each}
                          label={each}
                          onClick={self.wrongClick}
                          />)
              }
            })}
        </RadioButtonGroup>
        <p>{this.state.usermessage}</p>
      </div>
    )
  }
}
