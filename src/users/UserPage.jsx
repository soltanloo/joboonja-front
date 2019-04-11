import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/user_actions';
import CurrentUserSkills from './CurrentUserSkills';
import OtherUserSkills from './OtherUserSkills';
import SkillDropdownList from './SkillDropdownList';

export class UserPage extends Component {

  componentWillMount() {
    if(!this.props.curr || (this.props.curr.user.id !== this.props.match.params.id)) {
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
        <div className={"container-fluid"}>
          <div className={"row blue-bar"} id="blue-bar-wider">
          </div>
        </div>
        <div className={"container px-5"} id="profile-container">
          <div className={"row mb-4"} id="name-pic-row">
            <div className={"col-md-auto col-sm-auto col-auto text-center d-flex align-items-center"} id="profile-picture-col">
              <img src={user.profilePictureURL} className={"img-fluid profile-picture shadow-sm"} alt="" />
              <div className={"blue-decoration"}></div>
              <div className={"blue-decoration"} id="blue-decoration-wider"></div>
            </div>
            <div className={"col-md-auto col-sm-auto"} id="profile-name">
              <h2 className={"font-weight-bold mt-1"}>{user.firstName + " " + user.lastName}</h2>
              <h6 className={"font-weight-lighter mb-md-3"}>{user.jobTitle}</h6>
            </div>
          </div>
          <div className={"row"} id="profile-description-row">
            <div className={"col-sm-12"}>
              <p className={"font-weight-light"}>
                {user.bio}
              </p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-sm-12"}>
              <div className={"row"}>
                <div className={"col-sm-auto my-auto pl-0 ml-2"}>
                  <h5 className={"font-weight-bold"}>مهارت‌ها:</h5>
                </div>
                {isCurrentUser && <SkillDropdownList />}
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

UserPage.propTypes = {
  curr: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  curr: state.currentUser
})

const mapDispatchToProps = {
  fetchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
