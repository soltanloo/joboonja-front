import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUser } from './actions/auth_actions';
import Header from './Header';
import HomePage from './homepage/HomePage';
import ProjectPage from './projects/ProjectPage';
import UserPage from './users/UserPage';
import AuthPage from './auth/AuthPage';
import Footer from './Footer';
import { ToastContainer } from "react-toastify";
import { Redirect } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './style/bootstrap.css';
import './style/style.css';
import './style/fonts/flaticon/flaticon.css';
import './style/normalize.css';
import './style/slider.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    }
  }

  componentWillMount() {
    if (localStorage.authToken) {
      this.props.fetchUser(localStorage.authToken)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header loggedIn={this.state.loggedIn} />
          <ToastContainer rtl toastClassName={"custom-toast"} />
          <Switch>
            <Route path="/" exact render={
              (props) =>
                (!localStorage.authToken ? <Redirect to="/login"/> : <HomePage {...props} />)} />
            <Route path="/projects/:id" render={
              (props) =>
              (!localStorage.authToken ? <Redirect to="/login"/> : <ProjectPage {...props} />)} />
            <Route path="/users/:id" render={
              (props) =>
              (!localStorage.authToken ? <Redirect to="/login"/> : <UserPage {...props} />)} />
            <Route path="/login" render={
              (props) => (<AuthPage mode={'login'} {...props} />)} />
            <Route path="/register" render={
              (props) => (<AuthPage mode={'register'} {...props} />)} />
          </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(null, mapDispatchToProps)(App);