import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            token={this.props.token}
            id={this.props.id}
          />
          <Card>
            <CardHeader
              title={this.props.question}
              actAsExpander={true}
              showExpandableButton={true} />
            <CardText expandable={true}>
              <RadioButtonGroup>
                <RadioButtonGroup
                  value={this.props.choices[0]}
                  label={this.props.choices[0]}
                />
                <RadioButtonGroup
                  value={this.props.choices[1]}
                  label={this.props.choices[1]}
                />
                <RadioButtonGroup
                  value={this.props.choices[2]}
                  label={this.props.choices[2]}
                />
                <RadioButtonGroup
                  value={this.props.choices[3]}
                  label={this.props.choices[3]}
                />
                <RadioButtonGroup
                  value={this.props.choices[4]}
                  label={this.props.choices[4]}
                />
              </RadioButtonGroup>
            </CardText>
          </Card>
          <Card>
            <CardHeader
              title={this.props.question}
              actAsExpander={true}
              showExpandableButton={true} />
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}
