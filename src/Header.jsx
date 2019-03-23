import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './img/logo/logo v1.png';

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <header>
        <nav className="navbar fixed-top p-0 navbar-expand navbar-light bg-white shadow-sm">
          <div className="container">
            <a href="/">
              <img src={logo} id="header-logo" alt="Joboonja Logo" />
            </a>
            {this.props.loggedIn &&
              <ul className="nav navbar-nav navbar-right" id="header-menu">
                <li class="nav-item active">
                    <a class="nav-link" href="/users/1">حساب کاربری</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/">خروج</a>
                </li>
            </ul>
            }
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  loggedIn: true,
}