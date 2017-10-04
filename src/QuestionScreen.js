import React, { Component } from 'react';

export class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      choices: this.props.choices,
      correct: this.props.correct
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.question}</h1>
        <ul>
          <li>{this.state.choices[0]}</li>
          <li>{this.state.choices[1]}</li>
          <li>{this.state.choices[2]}</li>
          <li>{this.state.choices[3]}</li>
          <li>{this.state.choices[4]}</li>
        </ul>
      </div>
    )
  }
}
