import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { QuestionScreen } from './QuestionScreen';

export class QuestPage extends Component {
  constructor(props) {
    super(props)

    this.handleFoxPoint = this.handleFoxPoint.bind(this)
    this.handleDowntown = this.handleDowntown.bind(this)
    this.handleEastSide = this.handleEastSide.bind(this)
    this.handleSmithHill = this.handleSmithHill.bind(this)
  }

  // TODO: make a state or some sort of variable to pass to a constructor function
  // which builds each location's card

  // const questInfo = {
  //   title: ['Fox Point', 'Downtown', 'East Side', 'Smith Hill'],
  //   src: ['https://i.imgur.com/oydon46.jpg', 'https://i.imgur.com/xKbUw25.jpg', 'https://i.imgur.com/YiUbUVN.jpg', 'https://i.imgur.com/NIVcddj.jpg']
  // }
  handleFoxPoint() {
    let self = this;
    // TODO: get Fox Point data to send to questionScreen
    axios({
      url: 'http://localhost:4741' + '/questions',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.token
      }
    })
    .then(function(response) {
      console.log(response)
      if (response.status === 200) {
        const question = response.data.questions[0].ask
        const choices = [
          response.data.questions[0].first_choice,
          response.data.questions[0].second_choice,
          response.data.questions[0].third_choice,
          response.data.questions[0].fourth_choice,
          response.data.questions[0].fifth_choice,
        ]
        const correct = response.data.questions[0].correct_choice
        console.log(choices)
        console.log(correct)
        console.log(self.props.appContext)
        let questionScreen = [];
        // push questionScreen component with Fox Point data
        questionScreen.push(<QuestionScreen
                              question={question}
                              choices={choices}
                              correct={correct}
                              token={self.props.token}
                              id={self.props.id}
                              />)
        self.props.appContext.setState({
          uploadScreen: questionScreen
        })
      }
    })
    .catch(function(err) {
      console.error(err)
    })
  }

  handleDowntown() {
    console.log("You went downtown!")
  }

  handleEastSide() {
    console.log("You went east!")
  }

  handleSmithHill() {
    console.log("You went up dah hill!")
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
           <h2>Choose your quest:</h2>
           <Card onClick={this.handleFoxPoint}>
            <CardMedia overlay={<CardTitle title="Fox Point" />}>
              <img src="https://i.imgur.com/oydon46.jpg" alt='fox point'/>
            </CardMedia>
           </Card>
           <Card onClick={this.handleDowntown}>
            <CardMedia overlay={<CardTitle title="Downtown" />}>
              <img src="https://i.imgur.com/xKbUw25.jpg" alt='downtown'/>
            </CardMedia>
           </Card>
           <Card onClick={this.handleEastSide}>
            <CardMedia overlay={<CardTitle title="East Side" />}>
              <img src="https://i.imgur.com/YiUbUVN.jpg" alt='east side'/>
            </CardMedia>
           </Card>
           <Card onClick={this.handleSmithHill}>
            <CardMedia overlay={<CardTitle title="Smith Hill" />}>
              <img src="https://i.imgur.com/NIVcddj.jpg" alt='smith hill'/>
            </CardMedia>
           </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}
