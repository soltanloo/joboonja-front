import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './homepage/HomePage';
import ProjectPage from './projects/ProjectPage';
import UserPage from './users/UserPage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import Footer from './Footer';
import { ToastContainer } from "react-toastify";

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

  render() {
    return (
      <BrowserRouter>
        <Header loggedIn={this.state.loggedIn} />
          <ToastContainer rtl toastClassName={"custom-toast"} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/projects/:id" component={ProjectPage} />
            <Route path="/users/:id" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;