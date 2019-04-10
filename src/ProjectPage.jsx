import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchProject, bid } from './actions/project_actions';
import { Link } from 'react-router-dom';

export class ProjectPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      bidAmount: '',
      okayToSubmit: true,
      showBidNotification: false,
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
      this.setState({ showBidNotification: true })
    }
  }

  componentWillMount() {
    if(!this.props.curr || (this.props.curr.project.id !== this.props.match.params.id)) {
      this.props.fetchProject(this.props.match.params.id);
    }
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
    if (!this.props.curr) {
      return <p>در حال بارگذاری...</p>
    }
    const { project, hasBidden } = this.props.curr;
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
                {this.isPastDeadline(project.deadline) ? <div class="col-sm-12 deadline-reached">
                  <strong>
                    <i class="flaticon-success ml-1"></i>
                    <span class="font-weight-bold">مهلت تمام شده</span>
                  </strong>
                </div>
                : <div class="col-sm-12 deadline">
                <i class="flaticon-success ml-1"></i>
                <span><strong>زمان باقی‌مانده:</strong> ۱۷ دقیقه و ۲۵ ثانیه</span>
                </div>}
                <div class="col-sm-12 budget">
                  <strong><i class="flaticon-money-bag ml-1"></i>
                  <span>بودجه: {project.budget} تومان</span></strong>
                </div>
                {this.isPastDeadline(project.deadline) && <div class="col-sm-12 text-success">
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
            {this.isPastDeadline(project.deadline) ? 
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
