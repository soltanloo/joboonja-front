import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchProject, bid } from './actions/project_actions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isPastDeadline, calcTimeDifference } from './timeHelper';
import ProjectDeadlineCounter from './ProjectDeadlineCounter';
var persianJs = require('persianjs');

export class ProjectPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      bidAmount: '',
      okayToSubmit: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(this.props.curr.project.budget >= event.target.value && event.target.value >= 0)
      this.setState({ bidAmount: event.target.value });
    else
      this.setState({ okayToSubmit: false })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.okayToSubmit) {
      this.props.bid(this.props.match.params.id, this.state.bidAmount);
      this.setState({ bidAmount: '' });
      event.target.reset();
      this.props.fetchProject(this.props.match.params.id);
    } else {
      toast.error('مبلغ پیشنهادی بالاتر از بودجه است')
    }
  }

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
        <div class="container-fluid">
          <div class="row blue-bar">
          </div>
        </div>
        <div class="container shadow bg-white rounded" id="project-container">
          <div class="row" id="description-row">
            <div class="col-lg-3 col-md-5 col-xs-12 text-center" id="project-picture-col">
              <img src={project.imageUrl} class="img-fluid" id="project-picture" alt="" />
            </div>
            <div class="col-lg-9 col-md-7 pr-md-0" id="project-description-col">
              <h2 class="font-weight-bold mb-3 mt-md-1 mt-sm-2" id="project-title">{project.title}</h2>
              <div class="row">
                {pastDeadline ?
                <div class="col-sm-12 deadline-reached">
                  <strong>
                    <i class="flaticon-success ml-1"></i>
                    <span class="font-weight-bold">مهلت تمام شده</span>
                  </strong>
                </div> :
                <div class="col-sm-12 deadline">
                  <i class="flaticon-success ml-1"></i>
                  <ProjectDeadlineCounter deadline={project.deadline} mode={"full"} />
                </div>}
                <div class="col-sm-12 budget">
                  <strong><i class="flaticon-money-bag ml-1"></i>
                  <span>بودجه: {persianJs(project.budget).englishNumber().toString()} تومان</span></strong>
                </div>
                {pastDeadline && <div class="col-sm-12 text-success">
                {project.winner && <div><i class="flaticon-correct-symbol ml-1"></i>
                  <strong><Link to={`/users/${project.winner.id}`}>
                    <span>برنده: {project.winner.firstName + " " + project.winner.lastName}</span>
                  </Link></strong></div>}
                </div>}
              </div>
              <h5 class="font-weight-bold my-sm-3">توضیحات</h5>
              <p class="font-weight-light">
                {project.description}
              </p>
            </div>
          </div>
          <hr />
          <div class="row" id="skill-row">
            <div class="col-sm-12">
              <h5 class="font-weight-bold">مهارت‌های لازم:</h5>
              <div class="row skills">
                {project.skills.map(skill =>
                  <div class="col-xs-auto compact-card">
                    <span class="skill-name">{skill.name} </span>
                    <span class="skill-point"><span class="skill-point-text">{skill.point}</span></span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="row" id="bid-row">
            {pastDeadline ? 
            <div class="col-xs-auto col-sm-12 deadline-reached">
              <i class="flaticon-danger ml-1"></i>
              <span>مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!</span>
            </div>
            : hasBidden ? 
            <div class="col-xs-auto col-sm-12">
              <div class="col-xs-auto col-sm-12 text-success">
                <i class="flaticon-correct-symbol ml-1"></i>
                <span>شما قبلاً پیشنهاد خود را ثبت کرده‌اید</span>
              </div>
            </div>
            :
            <div class="col-xs-auto col-sm-12">
              <h5 class="mb-3 font-weight-bolder">ثبت پیشنهاد</h5>
              <form onSubmit={this.handleSubmit} class="form-inline">
                <div class="form-row ml-3 mb-2">
                    <input
                      value={this.state.value}
                      onChange={this.handleChange}
                      type="number" class="form-control d-inline"
                      id="bidAmount"
                      placeholder="پیشنهاد خود را وارد کنید"
                    />
                    <span class="d-inline" id="bidAmountUnit">تومان</span>
                </div>
                <button type="submit" class="btn submitBtn mb-2">ارسال</button>
              </form>
            </div>}
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  curr: state.currentProject
})

const mapDispatchToProps = {
  fetchProject,
  bid,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
