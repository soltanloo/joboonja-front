import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeSkill, addSkill } from '../actions/user_actions';

export class CurrentUserSkills extends Component {

  renderSkills() {
    return this.props.skills.map(skill =>
      <div key={skill.name} className={"col-xs-auto compact-card skill-removable"}>
        <span className={"skill-name"}>{skill.name} </span>
        <span className={"skill-point"} onClick={() => this.props.removeSkill(this.props.userId, skill.name)}>
          <span className={"skill-point-text"}>{skill.point}</span>
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className={"row skills mt-2"}>
        {this.props.skills && this.renderSkills()}
      </div>
    )
  }
}

CurrentUserSkills.propTypes = {
  skills: PropTypes.array.isRequired,
  addSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  skills: state.currentUser.user.skills
})

const mapDispatchToProps = {
  addSkill,
  removeSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserSkills)
