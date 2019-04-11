import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserSearch extends Component {

  render() {
    return (
      <div className="bg-white rounded shadow-sm w-100 align-items-center" id="user-search">
        <input type="text" className="form-control h-100" name="user-name" id="user-search-input" placeholder="جستجوی نام کاربر" />
      </div>
    )
  }
}
