import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Question } from './Question'

export class QuestionScreen extends Component {
  render() {
    var self = this;
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          {self.props.question.map(function(each, index) {
            return (<Question
                      question={each}
                      choices={self.props.choices[index]}
                      correct={self.props.correct[index]}
                    />)
          })}
        </MuiThemeProvider>
      </div>
    )
  }
}
