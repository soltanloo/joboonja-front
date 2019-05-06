import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjectsByQuery } from '../actions/project_actions';
import { toast } from 'react-toastify';

class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onSubmit(e){
    e.preventDefault();
    this.props.fetchProjectsByQuery(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className={"form-inline d-flex justify-content-between"} id="home-search-form">
        <div className={"form-group flex-grow-1 ml-1"}>
          <input
            value={this.state.query}
            onChange={(e) => this.setState({query: e.target.value})}
            type="text"
            className={"form-control w-100"}
            id="home-search-input"
            placeholder="جستجو در جاب‌اونجا"
          />
        </div>
        <button type="submit">جستجو</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects,
})

const mapDispatchToProps = {
  fetchProjectsByQuery,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSearch)