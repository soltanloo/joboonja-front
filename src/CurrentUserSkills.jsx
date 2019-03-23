import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeSkill, addSkill } from './actions/user_actions';

export class CurrentUserSkills extends Component {
  static propTypes = {
    prop: PropTypes
  }

  renderSkills() {
    return this.props.skills.map(skill =>
      <div class="col-xs-auto compact-card skill-removable">
        <span class="skill-name">{skill.name} </span>
        <span class="skill-point" onClick={() => this.props.removeSkill(this.props.userId, skill.name)}>
          <span class="skill-point-text">{skill.point}</span>
        </span>
      </div>
    )
  }

  render() {
    return (
      <div class="row skills mt-2">
        {this.props.skills && this.renderSkills()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  skills: state.currentUser.user.skills
})

const mapDispatchToProps = {
  addSkill,
  removeSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserSkills)
