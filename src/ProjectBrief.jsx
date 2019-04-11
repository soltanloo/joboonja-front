import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isPastDeadline, calcTimeDifference } from './timeHelper';
import ProjectDeadlineCounter from './ProjectDeadlineCounter';
var persianJs = require('persianjs');

export default class ProjectBrief extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { project } = this.props;
    return (
      <div key={project.id} className={"project-brief" + (isPastDeadline(project.deadline) ? " grayed-out" : "")}>
        <img src={project.imageUrl} className="img-fluid rounded project-brief-picture" alt="" />
        <div className="project-brief-description">
          <div className="d-flex align-items-center">
            <h5 className="project-brief-title">{project.title}</h5>
            {isPastDeadline(project.deadline) ? 
            <span className="project-brief-deadline project-brief-deadline-reached">مهلت تمام شده</span>
            : <ProjectDeadlineCounter deadline={project.deadline} mode={"compact"} />}
          </div>
          <p className="project-brief-description-p">{project.description.substring(0, 150)}...</p>
          <p className="project-brief-budget"><strong>بودجه: {persianJs(project.budget).englishNumber().toString()} تومان</strong></p>
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

ProjectBrief.defaultProps = {
  project: {}
}