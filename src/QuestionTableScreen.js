import React, { Component } from 'react';
import './App.css';
import { NavBar } from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { TableData } from './TableData'
import { AdminButtons } from './AdminButtons';

export class QuestionTableScreen extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          <AdminButtons
            appContext={this.props.appContext}
            credentials={this.props.credentials}
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Question</TableHeaderColumn>
                <TableHeaderColumn>Choice 1</TableHeaderColumn>
                <TableHeaderColumn>Choice 2</TableHeaderColumn>
                <TableHeaderColumn>Choice 3</TableHeaderColumn>
                <TableHeaderColumn>Choice 4</TableHeaderColumn>
                <TableHeaderColumn>Choice 5</TableHeaderColumn>
                <TableHeaderColumn>Correct Choice</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableData data={this.props.data} />
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    )
  }
}
