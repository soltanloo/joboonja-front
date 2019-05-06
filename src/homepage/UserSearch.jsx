import React, { Component } from 'react'
import { toast } from 'react-toastify';

export default class UserSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }
  
  keyPress= (e) => {
    if(e.keyCode === 13){
      this.props.doSearch(this.state.query);
    }
  }

  render() {
    return (
      <div className="bg-white rounded shadow-sm w-100 align-items-center" id="user-search">
        <input 
          onChange={(e) => this.setState({query: e.target.value})}
          value={this.state.query} type="text" className="form-control h-100" name="user-name" id="user-search-input" placeholder="جستجوی نام کاربر"
          onKeyDown={this.keyPress}
        />
      </div>
    )
  }
}
