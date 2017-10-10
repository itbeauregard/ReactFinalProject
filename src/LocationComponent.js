import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { QuestionScreen } from './QuestionScreen';
import { host } from './server'

export class LocationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: props.titles,
      images: props.images
    }
  }


  handleClick(cardLocation) {
    let self = this;
    // get all data with get request to back end
    axios({
      url: host + '/questions',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + this.props.token
      }
    })
    // on success, take only data that matches with card title
    .then(function(response) {
      console.log(response.data)
        const question_id = []
        const question = []
        const choices = []
        const correct = []
        response.data.questions.map(function(each) {
          // if the location is the same as the location on the card clicked,
          // then take the data
          if (each.location === cardLocation) {
            question_id.push(each.id)
            question.push(each.ask)
            choices.push([
              each.first_choice,
              each.second_choice,
              each.third_choice,
              each.fourth_choice,
              each.fifth_choice
            ])
            correct.push(each.correct_choice)
          }
        })
        const questions = {
          ids: question_id,
          asks: question,
          choices: choices,
          correct_choices: correct,
          numberOfQuestions: question.length
        }
        let questionScreen = [];
        // push questionScreen component with selected data
        questionScreen.push(<QuestionScreen
                              questions={questions}
                              appContext={self.props.appContext}
                              credentials={self.props.credentials}
                              />)
        self.props.appContext.setState({
          uploadScreen: questionScreen
        })
    })
    .catch(function(err) {
      console.error(err)
    })
  }

  // TODO: display to user what they've completed on location card
  // Create a component that handles each card
  render() {
    let self = this;
    return (
      <div>
        <MuiThemeProvider>
           {self.state.titles.map(function(each, index) {
             return (
               <Card onClick={() => {self.handleClick(each)}}>
                <CardMedia overlay={<CardTitle title={each} />}>
                  <img src={self.state.images[index]} alt={each}/>
                </CardMedia>
               </Card>
             )
           })}
        </MuiThemeProvider>
      </div>
    )
  }
}
