import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserBrief from './UserBrief';
import { fetchUsers, fetchUsersByQuery } from '../actions/user_actions';
import { Link } from 'react-router-dom';
import UserSearch from './UserSearch';

export class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="col-lg-3 col-md-5 col-12" id="profiles-list">
        <UserSearch doSearch={(query) => this.props.fetchUsersByQuery(query)} />
        {this.props.users && this.props.users.map(user => 
          <Link key={user.id} to={`/users/${user.id}`}>
            <UserBrief key={user.id} user={user} />
          </Link>
        )
        }
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired,
}

UsersList.defaultProps = {
  users: [],
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = {
  fetchUsers,
  fetchUsersByQuery,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
