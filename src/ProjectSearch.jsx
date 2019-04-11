import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProjectSearch extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <form class="form-inline d-flex justify-content-between" id="home-search-form">
        <div class="form-group flex-grow-1 ml-1">
          <input type="text" class="form-control w-100" id="home-search-input" placeholder="جستجو در جاب‌اونجا" />
        </div>
        <button type="submit">جستجو</button>
      </form>
    )
  }
}
