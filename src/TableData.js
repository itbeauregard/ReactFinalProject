import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import { QuestPage } from './QuestPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export class TableData extends Component {
  constructor(props) {
    super(props)
    console.log(props.data)
  }
  render() {
    let self = this;
    return (
      <MuiThemeProvider>
          {self.props.data.questions.map(function(each) {
            return (
              <TableRow>
                <TableRowColumn>{each.id}</TableRowColumn>
                <TableRowColumn>{each.location}</TableRowColumn>
                <TableRowColumn>{each.ask}</TableRowColumn>
                <TableRowColumn>{each.first_choice}</TableRowColumn>
                <TableRowColumn>{each.second_choice}</TableRowColumn>
                <TableRowColumn>{each.third_choice}</TableRowColumn>
                <TableRowColumn>{each.fourth_choice}</TableRowColumn>
                <TableRowColumn>{each.fifth_choice}</TableRowColumn>
                <TableRowColumn>{each.correct_choice}</TableRowColumn>
              </TableRow>
            )
          })}
      </MuiThemeProvider>
    )
  }
}
