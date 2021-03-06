import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { endorseSkill } from '../actions/user_actions';

export class OtherUserSkills extends Component {

  renderSkills() {
    return this.props.skills.map(skill => {
      if(this.props.skillsEndorsed[skill.name]) {
        return (<div key={skill.id} className={"col-xs-auto compact-card"}>
          <span className={"skill-name"}>{skill.name} </span>
          <span className={"skill-point skill-endorsed"}><span className={"skill-point-text"}>{skill.point}</span></span>
        </div>)
      } else {
        return (<div key={skill.id} className={"col-xs-auto compact-card skill-endorsable"}>
          <span className={"skill-name"}>{skill.name} </span>
          <span className={"skill-point"} onClick={() => this.props.endorseSkill(this.props.userId, this.props.myId, skill.id)}><span className={"skill-point-text"}>{skill.point}</span></span>
        </div>)
      }
    })
  }

  render() {
    return (
      <div className={"row skills mt-2"}>
        {this.props.skills && this.renderSkills()}
      </div>
    )
  }
}

OtherUserSkills.propTypes = {
  skills: PropTypes.array.isRequired,
  skillsEndorsed: PropTypes.object.isRequired,
  endorseSkill: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  skills: state.currentUser.user.skills,
  skillsEndorsed: state.currentUser.skillsEndorsed,
  myId: state.auth.user,
})

const mapDispatchToProps = {
  endorseSkill,
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserSkills)