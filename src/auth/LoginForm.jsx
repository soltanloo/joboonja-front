import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { toast } from 'react-toastify';

class LoginForm extends Component {
  
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={"col"}>
      <input className={"form-control"} {...input} placeholder={label} type={type}/>
      {touched && error && <span style={{color: 'red'}}>- {error}</span>}
    </div>
  )

  onSubmit(values) {
		toast.info('هنوز بک‌اند نداره :(')
	}

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
        <div className={"container"} id="login-form-container">
          <div className={"row"}>
            <div className={"col-lg-4 col-md-8 col-11 mx-auto justify-content-center shadow-lg rounded bg-light form-col"}>
              <h2 className={"text-center mb-3"}>ورود</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div className={"form-row mb-2"}>
                    <Field name="username" required type="text" id="username" label="نام کاربری" component={this.renderField} />
                  </div>
                  <div className={"form-row mb-2"}>
                    <Field name="password" required type="password" id="password" label="گذرواژه" component={this.renderField} />
                  </div>
                  <div className={"form-row mb-2 justify-content-center"}>
                    <button type="submit" disabled={submitting} className={"btn submitBtn"}>ثبت مشخصات</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'ضروری'
  } else if (!new RegExp("^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$").test(values.username)) {
    errors.username = 'نام کاربری فرمت صحیحی ندارد'
  }
  if (!values.password) {
    errors.password = 'ضروری'
  }
  return errors
}

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm)