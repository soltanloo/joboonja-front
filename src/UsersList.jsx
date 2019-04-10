import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserBrief from './UserBrief';
import { fetchUsers } from './actions/user_actions';
import { Link } from 'react-router-dom';

export class UsersList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="col-lg-3 col-md-5 col-12" id="profiles-list">
        <div className="bg-white rounded shadow-sm w-100 align-items-center" id="user-search">
          <input type="text" className="form-control h-100" name="user-name" id="user-search-input" placeholder="جستجوی نام کاربر" />
        </div>
        {this.props.users && this.props.users.map(user => 
          <Link to={`/users/${user.id}`}>
            <UserBrief key={user.id} user={user} />
          </Link>
        )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
