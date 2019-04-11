import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';

export default class UserSearch extends Component {
  
  keyPress(e){
    if(e.keyCode == 13){
      toast.info('هنوز بک‌اند نداره :(');
    }
  }

  render() {
    return (
      <div className="bg-white rounded shadow-sm w-100 align-items-center" id="user-search">
        <input type="text" className="form-control h-100" name="user-name" id="user-search-input" placeholder="جستجوی نام کاربر"
          onKeyDown={this.keyPress}
        />
      </div>
    )
  }
}
