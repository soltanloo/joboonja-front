import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isPastDeadline, calcTimeDifference } from './timeHelper';

export default class ProjectDeadlineCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      difference: calcTimeDifference(this.props.deadline, this.props.mode),
    };
    setInterval(() => this.calcTimeDifference(), 1000)
  }

  calcTimeDifference() {
    this.setState({ difference: calcTimeDifference(this.props.deadline, this.props.mode)})
  }

  render() {
    return (
      this.props.mode === "compact" ?
      <span className="project-brief-deadline">زمان باقی‌مانده: {this.state.difference}</span>
      : <span><strong>زمان باقی‌مانده: </strong>{this.state.difference}</span>
    )
  }
}
