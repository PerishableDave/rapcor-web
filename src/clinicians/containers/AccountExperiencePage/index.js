import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import ExperienceList, { ExperienceListItemModel } from '../../components/ExperienceList'
import { getClinicianToken } from '../../store/authentication'
import { fetchExperiences } from '../../store/experiences'
import { getExperiences } from '../../store/experiences/reducer'
import { fetchClinicianExperiences } from '../../store/clinicianExperiences'
import { getClinicianExperience } from '../../store/clinicianExperiences/reducer'

class AccountExperiencePage extends Component {

  componentDidMount() {
    this.props.fetchExperiences()
    this.props.fetchClinicianExperiences()
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ExperienceList experienceListItemModels={ this.props.experiencesListItemModels } />
          </div>
        </div>
      </div>
    )
  }
}

const createExperienceListItemModels = (state) => {
  const experiences = getExperiences(state.clinicians.experiences)

  return experiences.map(experience => {
    const clinicianExperience = getClinicianExperience(experience.id, state.clinicians.clinicianExperiences)
    return new ExperienceListItemModel(experience, clinicianExperience)
  })
}

const mapStateToProps = (state) => ({
  experiencesListItemModels: createExperienceListItemModels(state),
  token: getClinicianToken(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchExperiences: fetchExperiences(dispatch),
  fetchClinicianExperiences: fetchClinicianExperiences(dispatch)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  fetchClinicianExperiences: dispatchProps.fetchClinicianExperiences(stateProps.token)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AccountExperiencePage)
