import React, { Component } from 'react'

export default class Slideshow extends Component {
  render() {
    return (
      <div className={"container-fluid"}>
        <div className={"row"}>
            <div className={"col-sm-12 slider-col"}>
                <div id="slideshow">
                  <div className={"slide-wrapper"}>
                    <div className={"slide"}><h1 className={"text-black-50"}>اسلاید ۱</h1></div>
                    <div className={"slide"}><h1 className={"text-black-50"}>اسلاید۲</h1></div>
                    <div className={"slide"}><h1 className={"text-black-50"}>اسلاید۳</h1></div>
                    <div className={"slide"}><h1 className={"text-black-50"}>اسلاید ۴</h1></div>
                    <div className={"slide"}><h1 className={"text-black-50"}>اسلاید ۵</h1></div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}
