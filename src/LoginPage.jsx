import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slideshow from './Slideshow';

export default class LoginPage extends Component {

  render() {
    return (
      <main>
        <Slideshow />
        <div className={"container"} id="login-form-container">
          <div className={"row"}>
            <div className={"col-lg-4 col-md-8 col-11 mx-auto justify-content-center shadow-lg rounded bg-light form-col"}>
              <h2 className={"text-center mb-3"}>ورود</h2>
                <form>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="username" placeholder="نام کاربری" />
                    </div>
                  </div>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <input type="password" className={"form-control"} id="password" placeholder="گذرواژه" />
                    </div>
                  </div>
                  <div className={"form-row mb-2 justify-content-center"}>
                    <button type="submit" className={"btn submitBtn"}>ثبت مشخصات</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
