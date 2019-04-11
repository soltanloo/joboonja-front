import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProjectSearch extends Component {

  render() {
    return (
      <form className={"form-inline d-flex justify-content-between"} id="home-search-form">
        <div className={"form-group flex-grow-1 ml-1"}>
          <input type="text" className={"form-control w-100"} id="home-search-input" placeholder="جستجو در جاب‌اونجا" />
        </div>
        <button type="submit">جستجو</button>
      </form>
    )
  }
}
