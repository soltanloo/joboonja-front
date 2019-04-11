import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchProject } from './actions/project_actions';
import { Link } from 'react-router-dom';
import { isPastDeadline } from './timeHelper';
import ProjectDeadlineCounter from './ProjectDeadlineCounter';
import BidForm from './BidForm';
var persianJs = require('persianjs');

export class ProjectPage extends Component {

  componentWillMount() {
    if(!this.props.curr || (this.props.curr.project.id !== this.props.match.params.id)) {
      this.props.fetchProject(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.curr) {
      return <p>در حال بارگذاری...</p>
    }
    const { project, hasBidden } = this.props.curr;
    const pastDeadline = isPastDeadline(project.deadline);
    return (
      <main>
        <div className={"container-fluid"}>
          <div className={"row blue-bar"}>
          </div>
        </div>
        <div className={"container shadow bg-white rounded"} id="project-container">
          <div className={"row"} id="description-row">
            <div className={"col-lg-3 col-md-5 col-xs-12 text-center"} id="project-picture-col">
              <img src={project.imageUrl} className={"img-fluid"} id="project-picture" alt="" />
            </div>
            <div className={"col-lg-9 col-md-7 pr-md-0"} id="project-description-col">
              <h2 className={"font-weight-bold mb-3 mt-md-1 mt-sm-2"} id="project-title">{project.title}</h2>
              <div className={"row"}>
                {pastDeadline ?
                <div className={"col-sm-12 deadline-reached"}>
                  <strong>
                    <i className={"flaticon-success ml-1"}></i>
                    <span className={"font-weight-bold"}>مهلت تمام شده</span>
                  </strong>
                </div> :
                <div className={"col-sm-12 deadline"}>
                  <i className={"flaticon-success ml-1"}></i>
                  <ProjectDeadlineCounter deadline={project.deadline} mode={"full"} />
                </div>}
                <div className={"col-sm-12 budget"}>
                  <strong><i className={"flaticon-money-bag ml-1"}></i>
                  <span>بودجه: {persianJs(project.budget).englishNumber().toString()} تومان</span></strong>
                </div>
                {pastDeadline && <div className={"col-sm-12 text-success"}>
                {project.winner && <div><i className={"flaticon-correct-symbol ml-1"}></i>
                  <strong><Link to={`/users/${project.winner.id}`}>
                    <span>برنده: {project.winner.firstName + " " + project.winner.lastName}</span>
                  </Link></strong></div>}
                </div>}
              </div>
              <h5 className={"font-weight-bold my-sm-3"}>توضیحات</h5>
              <p className={"font-weight-light"}>
                {project.description}
              </p>
            </div>
          </div>
          <hr />
          <div className={"row"} id="skill-row">
            <div className={"col-sm-12"}>
              <h5 className={"font-weight-bold"}>مهارت‌های لازم:</h5>
              <div className={"row skills"}>
                {project.skills.map(skill =>
                  <div key={skill.name} className={"col-xs-auto compact-card"}>
                    <span className={"skill-name"}>{skill.name} </span>
                    <span className={"skill-point"}><span className={"skill-point-text"}>{skill.point}</span></span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={"row"} id="bid-row">
            <div className={`col-xs-auto col-sm-12 ${pastDeadline ? 'deadline-reached' : ''}`}>
              {pastDeadline ? 
              <div>
                <i className={"flaticon-danger ml-1"}></i>
                <span>مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!</span>
              </div>
              : hasBidden ? 
              <div className={"col-xs-auto col-sm-12 text-success"}>
                <i className={"flaticon-correct-symbol ml-1"}></i>
                <span>شما قبلاً پیشنهاد خود را ثبت کرده‌اید</span>
              </div>
              :
              <div>
                <h5 className={"mb-3 font-weight-bolder"}>ثبت پیشنهاد</h5>
                <BidForm />
              </div>
              }
            </div>
            
          </div>
        </div>
      </main>
    )
  }
}

ProjectPage.propTypes = {
  curr: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  curr: state.currentProject
})

const mapDispatchToProps = {
  fetchProject,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
