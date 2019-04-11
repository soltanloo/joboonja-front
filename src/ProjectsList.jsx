import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProjects } from './actions/project_actions';
import ProjectBrief from './ProjectBrief';
import { Link } from 'react-router-dom';

export class ProjectsList extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="col-lg-9 col-md-7 col-12 mt-5 mt-md-0" id="projects-list">
        {this.props.projects && this.props.projects.map(project => 
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectBrief project={project} />
          </Link>
        )}
      </div>
    )
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
  fetchProjects: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  projects: state.projects,
})

const mapDispatchToProps = {
  fetchProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
