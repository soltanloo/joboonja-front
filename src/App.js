import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
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
      <BrowserRouter >
        <Header />
          <ToastContainer />
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
              loggedIn={this.state.loggedIn}
            />
            <Route path="/projects/:id" exact component={ProjectPage} />
            <Route path="/users/:id" exact component={UserPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;