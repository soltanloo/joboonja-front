import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectsList from './ProjectsList';
import UsersList from './UsersList';

export default class HomePage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <main>
        <div className="container-fluid">
          <div class="row blue-bar" id="blue-bar-widest">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 id="intro-title">جاب‌اونجا خوب است!</h1>
                  <p id="intro-subtitle">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                  </p>
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col-md-7" id="home-search-bar">
                  <form class="form-inline d-flex justify-content-between" id="home-search-form">
                      <div class="form-group flex-grow-1 ml-1">
                        <input type="text" class="form-control w-100" id="home-search-input" placeholder="جستجو در جاب‌اونجا" />
                      </div>
                      <button type="submit">جستجو</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5" id="home-main-container">
          <div className="row">
            <UsersList />
            <ProjectsList />
          </div>
        </div>
      </main>
    )
  }
}