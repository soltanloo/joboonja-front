import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from './img/logo/logo v1.png';
import { logout } from './actions/auth_actions';
import { connect } from 'react-redux';
class Header extends Component {

  render() {
    return (
      <header>
        <nav className="navbar fixed-top p-0 navbar-expand navbar-light bg-white shadow-sm">
          <div className="container">
            <Link to={"/"}>
              <img src={logo} id="header-logo" alt="Joboonja Logo" />
            </Link>
            {localStorage.authToken ?
              <ul className="nav navbar-nav navbar-right" id="header-menu">
                  <li className={"nav-item active"}>
                      <Link className={"nav-link"} to={"/users/" + this.props.auth.user}>حساب کاربری</Link>
                  </li>
                  <li className={"nav-item active"}>
                      <Link onClick={() => this.props.logout()} className={"nav-link"} to={"/"}>خروج</Link>
                  </li>
              </ul> :
              <ul className="nav navbar-nav navbar-right" id="header-menu">
                <li className={"nav-item active"}>
                    <Link className={"nav-link"} to={"/register"}>ثبت‌نام</Link>
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
  loggedIn: false,
}

function mapStateToProps({ auth }, ownProps) {
	return {auth};
}

export default connect(mapStateToProps, { logout })(Header);