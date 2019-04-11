import React, { Component } from 'react'

export default class Footer extends Component {

  render() {
    return (
      <footer className={"footer"}>
        <div className={"container-fluid text-center h-100 d-flex align-items-center justify-content-center"}>
          <div className={"row align-middle"}>
            <div className={"col-sm-12"}>
              &copy; تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد            
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
