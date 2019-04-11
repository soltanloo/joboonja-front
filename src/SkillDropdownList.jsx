import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addSkill } from './actions/user_actions';

export class SkillDropdownList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSkillToAdd: null,
    }
    this.onSelectedSkillChange = this.onSelectedSkillChange.bind(this);
    this.onAddSkillSubmit = this.onAddSkillSubmit.bind(this);
  }

  onSelectedSkillChange(event) {
    this.setState({ selectedSkillToAdd: event.target.value });
  }

  onAddSkillSubmit(event) {
    event.preventDefault();
    if (this.state.selectedSkillToAdd !== null) {
      this.props.addSkill(this.props.curr.user.id, this.state.selectedSkillToAdd);
      event.target.reset();
    }
  }

  render() {
    return (
      <div className={"col-auto compact-card skill-add-dropdown align-items-center"}>
        <form className={"form-inline"} onSubmit={this.onAddSkillSubmit}>
          <div className={"form-row ml-1"}>
            <select defaultValue="" className={"form-control"} id="addSkillMenu" onChange={this.onSelectedSkillChange}>
              <option value="" disabled>-- انتخاب مهارت --</option>
              {this.props.curr.addableSkills && this.props.curr.addableSkills.map(skill =>
                <option key={skill.name} value={skill.name}>{skill.name}</option>
              )}
            </select>
          </div>
          <button type="submit" className={"btn submitBtn"}>افزودن مهارت</button>
        </form>
      </div>
    )
  }
}

SkillDropdownList.propTypes = {
  curr: PropTypes.object.isRequired,
  addSkill: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  curr: state.currentUser
})

const mapDispatchToProps = {
  addSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillDropdownList)
