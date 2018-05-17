import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ExperienceListItem extends Component {
  static propTypes = {
    experience: PropTypes.object
  }

  render() {
    const experience = this.props.experience
    return (
      <div className="form-group row experience-list-item">
        <label className="col-md-8 col-form-label" htmlFor="">{ experience.description }</label>
        <div className="col-md-4">
          <input type="number" className="form-control" />
        </div>
      </div>
    )
  }
}

export default class ExperienceList extends Component {
  static propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const experiences = this.props.experiences

    const listItems = experiences.map((experience) =>
      <ExperienceListItem 
        key={experience.id}
        experience={experience} />
    )

    return (
      <form>
        { listItems }
        <button type="submit" className="btn btn-primary float-right">Save</button>
      </form>
    )
  }
}
