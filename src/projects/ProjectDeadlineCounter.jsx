import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { calcTimeDifference } from '../helpers/timeHelper';

export default class ProjectDeadlineCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      difference: calcTimeDifference(this.props.deadline, this.props.mode),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.calcTimeDifference(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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

ProjectDeadlineCounter.propTypes = {
  mode: PropTypes.string,
  deadline: PropTypes.number.isRequired,
}

ProjectDeadlineCounter.defaultProps = {
  mode: 'compact',
}