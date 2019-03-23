import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <footer class="footer">
        <div class="container-fluid text-center h-100 d-flex align-items-center justify-content-center">
          <div class="row align-middle">
            <div class="col-sm-12">
              &copy; تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد            
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
