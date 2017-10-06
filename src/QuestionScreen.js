import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Question } from './Question';
import RaisedButton from 'material-ui/RaisedButton';
import { UploadScreen } from './UploadScreen';

export class QuestionScreen extends Component {
  constructor(props) {
    super(props)
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleFinish() {
    this.props.appContext.setState({
      uploadScreen: <UploadScreen
                      appContext={this.props.appContext}
                      credentials={this.props.credentials}
                    />
    })
  }

  render() {
    var self = this;
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          {self.props.questions.asks.map(function(each, index) {
            return (<Question
                      question={each}
                      question_id={self.props.questions.ids[index]}
                      choices={self.props.questions.choices[index]}
                      correct={self.props.questions.correct_choices[index]}
                      credentials={self.props.credentials}
                      appContext={self.props.appContext}
                    />)
          })}
          <RaisedButton
            label="I finished!"
            onClick={this.handleFinish}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
