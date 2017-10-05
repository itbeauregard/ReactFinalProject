import React, { Component } from 'react';
import { NavBar } from './NavBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class Choices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usermessage: ''
    }

    this.correctClick = this.correctClick.bind(this);
    this.wrongClick = this.wrongClick.bind(this);
  }

  correctClick() {
    this.setState({
      usermessage: 'Correct!'
    })
    console.log(this.state.usermessage)
  }

  wrongClick() {
    this.setState({
      usermessage: 'Try again.'
    })
    console.log(this.state.usermessage)
  }


  render() {
    let self = this;
    return(
      <div>
        <RadioButtonGroup name='choices'>
            {this.props.choices.map(function(each) {
              // TODO: if the choice is not correct, style red and say try again
              // if choice is correct, style green and say correct!
              if (each === self.props.correct) {
                return (<RadioButton
                          value={each}
                          label={each}
                          onClick={self.correctClick}
                          />)
              } else {
                return (<RadioButton
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
