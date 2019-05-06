import React, { Component } from 'react'
import ProjectsList from './ProjectsList';
import UsersList from './UsersList';
import ProjectSearch from './ProjectSearch';
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/project_actions';

export default class HomePage extends Component {

  render() {
    return (
      <main>
        <div className={"container-fluid"}>
          <div className={"row blue-bar"} id="blue-bar-widest">
            <div className={"container"}>
              <div className={"row"}>
                <div className={"col-12"}>
                  <h1 id="intro-title">جاب‌اونجا خوب است!</h1>
                  <p id="intro-subtitle">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                  </p>
                </div>
              </div>
              <div className={"row justify-content-center mt-3"}>
                <div className={"col-md-7"} id="home-search-bar">
                  <ProjectSearch
                   
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"container px-5"} id="home-main-container">
          <div className={"row"}>
            <UsersList />
            <ProjectsList />
          </div>
        </div>
      </main>
    )
  }
}