import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { endorseSkill } from './actions/user_actions';

export class OtherUserSkills extends Component {
  static propTypes = {
    prop: PropTypes
  }

  renderSkills() {
    return this.props.skills.map(skill => {
      if(this.props.skillsEndorsed[skill.name]) {
        return (<div class="col-xs-auto compact-card">
          <span class="skill-name">{skill.name} </span>
          <span class="skill-point skill-endorsed"><span class="skill-point-text">{skill.point}</span></span>
        </div>)
      } else {
        return (<div class="col-xs-auto compact-card skill-endorsable">
          <span class="skill-name">{skill.name} </span>
          <span class="skill-point" onClick={() => this.props.endorseSkill(this.props.userId, 1, skill.name)}><span class="skill-point-text">{skill.point}</span></span>
        </div>)
      }
    })
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
  skills: state.currentUser.user.skills,
  skillsEndorsed: state.currentUser.skillsEndorsed,
})

const mapDispatchToProps = {
  endorseSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserSkills)