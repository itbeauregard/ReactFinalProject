import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class QuestPage extends Component {
  constructor(props) {
    super(props)

    this.handleFoxPoint = this.handleFoxPoint.bind(this)
    this.handleDowntown = this.handleDowntown.bind(this)
    this.handleEastSide = this.handleEastSide.bind(this)
    this.handleSmithHill = this.handleSmithHill.bind(this)
  }
  // const questInfo = {
  //   title: ['Fox Point', 'Downtown', 'East Side', 'Smith Hill'],
  //   src: ['https://i.imgur.com/oydon46.jpg', 'https://i.imgur.com/xKbUw25.jpg', 'https://i.imgur.com/YiUbUVN.jpg', 'https://i.imgur.com/NIVcddj.jpg']
  // }
  handleFoxPoint() {
    console.log("You clicked me!")
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
