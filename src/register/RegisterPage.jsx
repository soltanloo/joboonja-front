import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slideshow from './Slideshow';
import { Field, reduxForm } from 'redux-form'
import { toast } from 'react-toastify';

class RegisterPage extends Component {

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={"col"}>
      <input className={"form-control"} {...input} placeholder={label} type={type}/>
      {touched && error && <span style={{color: 'red'}}>- {error}</span>}
    </div>
  )

  renderTextarea = ({ input, id, label, rows, meta: { touched, error } }) => {
    return (<div className={"col"}>
      <div className={"form-group"}>
        <textarea className={"form-control"} id={id} {...input} rows={rows} placeholder={label}></textarea>
        {touched && error && <span style={{color: 'red'}}>-{error}</span>}
      </div>
    </div>)
  }

  onSubmit(values) {
		toast.info('هنوز بک‌اند نداره :(')
	}

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <main>
        <Slideshow />
        <div className={"container"} id="register-form-container">
          <div className={"row"}>
            <div className={"col-lg-5 col-md-8 col-11 mx-auto justify-content-center shadow-lg rounded bg-light form-col"}>
              <h2 className={"text-center mb-3"}>ثبت‌نام</h2>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className={"form-row mb-2"}>
                  <Field name="firstName" required type="text" id="first-name" label="نام" component={this.renderField} />
                  <Field name="lastName" type="text" id="last-name" label="نام خانوادگی" component={this.renderField} />
                  <Field name="jobTitle" type="text" id="job-title" label="شغل" component={this.renderField} />
                </div>
                <div className={"form-row mb-2"}>
                  <Field name="username" required type="text" id="username" label="نام کاربری" component={this.renderField} />
                </div>
                <div className={"form-row mb-2"}>
                  <Field name="password" required type="password" id="password" label="گذرواژه" component={this.renderField} />
                  <Field name="passwordRepeat" required type="password" id="password-repeat" label="تکرار گذرواژه" component={this.renderField} />
                </div>
                <div className={"form-row mb-2"}>
                  <Field name="pictureURL" type="text" id="picture-url" label="لینک تصویر پروفایل" component={this.renderField} />
                </div>
                <div className={"form-row mb-2"}>
                  <Field name="bio" id="bio" rows="3" label="درباره" component={this.renderTextarea} />
                </div>
                <div className={"form-row mb-2 justify-content-center"}>
                  <button type="submit" disabled={submitting} className={"btn submitBtn"}>ثبت مشخصات</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'ضروری'
  }
  if (!values.username) {
    errors.username = 'ضروری'
  } else if (!new RegExp("^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$").test(values.username)) {
    errors.username = 'نام کاربری فرمت صحیحی ندارد'
  }
  if (!values.password) {
    errors.password = 'ضروری'
  }
  if (!values.passwordRepeat) {
    errors.passwordRepeat = 'ضروری'
  }
  if (values.password !== values.passwordRepeat) {
    errors.passwordRepeat = 'گذرواژه‌ها تطابق ندارند'
  }
  return errors
}

export default reduxForm({
  form: 'registerForm',
  validate,
})(RegisterPage)