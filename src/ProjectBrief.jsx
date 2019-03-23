import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProjectBrief extends Component {
  static propTypes = {
    prop: PropTypes
  }

  calcTimeDifference(time) {
    var now = new Date();
    var deadline = new Date(time);
    var diffMs = (deadline - now);
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return (diffDays + ":" + diffHrs + ":" + diffMins);
  }

  isPastDeadline(time) {
    var now = new Date();
    var deadline = new Date(time);
    var diffMs = (deadline - now);
    return diffMs <= 0;
  }

  render() {
    const { project } = this.props;
    return (
      <div key={project.id} className={"project-brief" + (this.isPastDeadline(project.deadline) ? " grayed-out" : "")}>
        <img src={project.imageUrl} className="img-fluid rounded project-brief-picture" alt="" />
        <div className="project-brief-description">
          <div className="d-flex align-items-center">
            <h5 className="project-brief-title">{project.title}</h5>
            {this.isPastDeadline(project.deadline) ? 
            <span className="project-brief-deadline project-brief-deadline-reached">مهلت تمام شده</span>
            : <span className="project-brief-deadline">زمان باقی‌مانده: {this.calcTimeDifference(project.deadline)}</span>
            }
          </div>
          <p className="project-brief-description-p">{project.description.substring(0, 150)}...</p>
          <p className="project-brief-budget"><strong>بودجه: {project.budget} تومان</strong></p>
          <div className="project-brief-skills">
            <span className="project-brief-skills-title">مهارت‌ها: </span>
            {project.skills.map(skill => {
              return(
                <span key={skill.name} className="project-brief-skill">{skill.name}</span>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

ProjectBrief.propTypes = {
  project: PropTypes.object.isRequired,
}