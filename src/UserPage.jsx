import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser, addSkill } from './actions/user_actions';
import CurrentUserSkills from './CurrentUserSkills';
import OtherUserSkills from './OtherUserSkills';

export class UserPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedSkillToAdd: null,
    }
    this.onSelectedSkillChange = this.onSelectedSkillChange.bind(this);
    this.onAddSkillSubmit = this.onAddSkillSubmit.bind(this);
  }

  componentWillMount() {
    if(!this.props.curr || (this.props.curr.user.id !== this.props.match.params.id)) {
      this.props.fetchUser(this.props.match.params.id);
    }
  }

  onSelectedSkillChange(event) {
    this.setState({ selectedSkillToAdd: event.target.value });
  }

  onAddSkillSubmit(event) {
    event.preventDefault();
    if (this.state.selectedSkillToAdd !== null) {
      this.props.addSkill(this.props.match.params.id, this.state.selectedSkillToAdd);
      event.target.reset();
      this.props.fetchUser(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.curr) {
      return <p>در حال بارگذاری...</p>
    }
    const { user, isCurrentUser } = this.props.curr;
    return (
      <main>
        <div class="container-fluid">
          <div class="row blue-bar" id="blue-bar-wider">
          </div>
        </div>
        <div class="container px-5" id="profile-container">
          <div class="row mb-4" id="name-pic-row">
            <div class="col-md-auto col-sm-auto col-auto text-center d-flex align-items-center" id="profile-picture-col">
              <img src={user.profilePictureURL} class="img-fluid profile-picture shadow-sm" alt="" />
              <div class="blue-decoration"></div>
              <div class="blue-decoration" id="blue-decoration-wider"></div>
            </div>
            <div class="col-md-auto col-sm-auto" id="profile-name">
              <h2 class="font-weight-bold mt-1">{user.firstName + " " + user.lastName}</h2>
              <h6 class="font-weight-lighter mb-md-3">{user.jobTitle}</h6>
            </div>
          </div>
          <div class="row" id="profile-description-row">
            <div class="col-sm-12">
              <p class="font-weight-light">
                {user.bio}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-auto my-auto pl-0 ml-2">
                  <h5 class="font-weight-bold">مهارت‌ها:</h5>
                </div>
                {isCurrentUser && <div class="col-auto compact-card skill-add-dropdown align-items-center">
                  <form class="form-inline" onSubmit={this.onAddSkillSubmit}>
                    <div class="form-row ml-1">
                      <select class="form-control" id="addSkillMenu" onChange={this.onSelectedSkillChange}>
                        <option value="" disabled selected>-- انتخاب مهارت --</option>
                        {this.props.curr.addableSkills && this.props.curr.addableSkills.map(skill =>
                          <option value={skill.name}>{skill.name}</option>
                        )}
                      </select>
                    </div>
                    <button type="submit" class="btn submitBtn">افزودن مهارت</button>
                  </form>
                </div>}
              </div>
              {isCurrentUser ?
                <CurrentUserSkills userId={user.id} />
                : <OtherUserSkills userId={user.id} />
              }
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  curr: state.currentUser
})

const mapDispatchToProps = {
  fetchUser,
  addSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
