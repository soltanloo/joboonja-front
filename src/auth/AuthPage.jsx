import React, { Component } from 'react'
import Slideshow from './Slideshow';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class AuthPage extends Component {

  render() {
    const { mode } = this.props;
    return (
      <main>
        <Slideshow />
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </main>
    )
  }
}