import React, { Component } from 'react'
import { toast } from 'react-toastify';

export default class ProjectSearch extends Component {

  onSubmit(e){
    e.preventDefault();
    toast.info('هنوز بک‌اند نداره :(');
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className={"form-inline d-flex justify-content-between"} id="home-search-form">
        <div className={"form-group flex-grow-1 ml-1"}>
          <input type="text" className={"form-control w-100"} id="home-search-input" placeholder="جستجو در جاب‌اونجا" />
        </div>
        <button type="submit">جستجو</button>
      </form>
    )
  }
}
