import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Choices } from './Choices'

export class QuestionScreen extends Component {
  render() {
    return (
      <div>
        <Choices
          question={this.props.question}
          choices={this.props.choices}
          token={this.props.token}
          id={this.props.idea}
        />
      </div>
    )
  }
}
