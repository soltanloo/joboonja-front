import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RegisterPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <main>
        <div class="container-fluid">
          <div class="row">
              <div class="col-sm-12 slider-col">
                  <div id="slideshow">
                    <div class="slide-wrapper">
                      <div class="slide"><h1 class="text-black-50">اسلاید ۱</h1></div>
                      <div class="slide"><h1 class="text-black-50">اسلاید۲</h1></div>
                      <div class="slide"><h1 class="text-black-50">اسلاید۳</h1></div>
                      <div class="slide"><h1 class="text-black-50">اسلاید ۴</h1></div>
                      <div class="slide"><h1 class="text-black-50">اسلاید ۵</h1></div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="container" id="register-form-container">
          <div class="row">
            <div class="col-lg-5 col-md-8 col-11 mx-auto justify-content-center shadow-lg rounded bg-light register-form-col">
              <h2 class="text-center mb-3">ثبت‌نام</h2>
                <form>
                    <div class="form-row mb-2">
                      <div class="col">
                        <input type="text" class="form-control" id="first-name" placeholder="نام" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" id="last-name" placeholder="نام خانوادگی" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" id="job-title" placeholder="شغل" />
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="col">
                        <input type="text" class="form-control" id="username" placeholder="نام کاربری" />
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="col">
                        <input type="password" class="form-control" id="password" placeholder="گذرواژه" />
                      </div>
                      <div class="col">
                        <input type="password" class="form-control" id="password-repeat" placeholder="تکرار گذرواژه" />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col">
                        <input type="text" class="form-control" id="picture-url" placeholder="لینک تصویر پروفایل" />
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="col">
                        <div class="form-group">
                          <label for=""></label>
                          <textarea class="form-control" name="bio" id="bio" rows="3" placeholder="درباره"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="form-row mb-2 justify-content-center">
                    <button type="submit" class="btn submitBtn">ثبت مشخصات</button>
                  </div>
                  </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
