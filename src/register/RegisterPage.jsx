import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slideshow from '../Slideshow';

export default class RegisterPage extends Component {

  render() {
    return (
      <main>
        <Slideshow />
        <div className={"container"} id="register-form-container">
          <div className={"row"}>
            <div className={"col-lg-5 col-md-8 col-11 mx-auto justify-content-center shadow-lg rounded bg-light form-col"}>
              <h2 className={"text-center mb-3"}>ثبت‌نام</h2>
                <form>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="first-name" placeholder="نام" />
                    </div>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="last-name" placeholder="نام خانوادگی" />
                    </div>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="job-title" placeholder="شغل" />
                    </div>
                  </div>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="username" placeholder="نام کاربری" />
                    </div>
                  </div>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <input type="password" className={"form-control"} id="password" placeholder="گذرواژه" />
                    </div>
                    <div className={"col"}>
                      <input type="password" className={"form-control"} id="password-repeat" placeholder="تکرار گذرواژه" />
                    </div>
                  </div>
                  <div className={"form-row"}>
                    <div className={"col"}>
                      <input type="text" className={"form-control"} id="picture-url" placeholder="لینک تصویر پروفایل" />
                    </div>
                  </div>
                  <div className={"form-row mb-2"}>
                    <div className={"col"}>
                      <div className={"form-group"}>
                        <label for=""></label>
                        <textarea className={"form-control"} name="bio" id="bio" rows="3" placeholder="درباره"></textarea>
                      </div>
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
