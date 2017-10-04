import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class Question extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={this.props.question}
              actAsExpander={true}
              showExpandableButton={true} />
            <CardText expandable={true}>
              <RadioButtonGroup name='choices'>
                {this.props.choices.map(function(each) {
                  return (<RadioButtonGroup
                            value={each}
                            label={each}
                            />)
                })}
              </RadioButtonGroup>
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}
