import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Choices } from './Choices'

export class Question extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let self = this;
    return(
      <div>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={this.props.question}
              actAsExpander={true}
              showExpandableButton={true} />
            <CardText expandable={true}>
              <Choices
                choices={self.props.choices}
                question_id={self.props.question_id}
                correct={self.props.correct}
                credentials={self.props.credentials}
                appContext={self.props.appContext}
              />
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}
