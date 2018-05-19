import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ExperienceListItemModel {
  constructor(experience, clinicianExperience) {
    this.id = experience.id
    this.description = experience.description
    this.years = clinicianExperience ? clinicianExperience.years : undefined
  }
}

class ExperienceListItem extends Component {
  static propTypes = {
    model: PropTypes.object
  }

  render() {
    const model = this.props.model
    return (
      <div className="form-group row experience-list-item">
        <label className="col-md-8 col-form-label" htmlFor="">{ model.description }</label>
        <div className="col-md-4">
          <input type="number" className="form-control" value={model.years} />
        </div>
      </div>
    )
  }
}

export default class ExperienceList extends Component {
  static propTypes = {
    experienceListItemModels: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const models = this.props.experienceListItemModels || []

    const listItems = models.map((model) =>
      <ExperienceListItem 
        key={model.id}
        model={model} />
    )

    return (
      <form>
        { listItems }
        <button type="submit" className="btn btn-primary float-right">Save</button>
      </form>
    )
  }
}
