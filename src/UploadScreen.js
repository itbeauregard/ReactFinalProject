import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Tab from 'material-ui/Tabs';

class UploadScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleFoxPoint = this.handleFoxPoint.bind(this)
    this.handleDowntown = this.handleDowntown.bind(this)
    this.handleEastSide = this.handleEastSide.bind(this)
    this.handleSmithHill = this.handleSmithHill.bind(this)
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

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
          <AppBar
             title="Home"
             onClick={this.handleToggle}
             children={
               <Drawer open={this.state.open}>
                 <MenuItem>Profile</MenuItem>
                 <MenuItem>Sign Out</MenuItem>
               </Drawer>
             }
           />
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

export default UploadScreen;
