import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { QuestionScreen } from './QuestionScreen';
import { host } from './server';
import { LocationComponent } from './LocationComponent';

export class QuestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ['Fox Point', 'Downtown', 'East Side', 'Smith Hill'],
      src: ['https://i.imgur.com/oydon46.jpg', 'https://i.imgur.com/xKbUw25.jpg', 'https://i.imgur.com/YiUbUVN.jpg', 'https://i.imgur.com/NIVcddj.jpg']
    }
  }
  // TODO: right now, locations are hard coded into the front end, but eventually
  // I would like to pull locations from the back ends

  // TODO: display to user what they've completed on location card

  // Location Component handles each card
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <h2>Choose your quest:</h2>
          <LocationComponent
            appContext={this.props.appContext}
            credentials={this.props.credentials}
            titles={this.state.title}
            images={this.state.src}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
