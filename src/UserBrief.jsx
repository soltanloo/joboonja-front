import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserBrief extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { user } = this.props;
    return (
      <div className="profile-brief">
        <img src={user.profilePictureURL} className="img-fluid rounded profile-brief-picture" alt="" />
        <div>
          <p>{user.firstName + " " + user.lastName}</p>
          <p>{user.jobTitle}</p>
        </div>
      </div>
    )
  }
}

UserBrief.propTypes = {
  user: PropTypes.object.isRequired,
}