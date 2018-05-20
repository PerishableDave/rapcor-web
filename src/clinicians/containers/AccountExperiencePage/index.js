import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import ExperienceList  from '../../components/ExperienceList'
import { getClinicianToken } from '../../store/authentication'
import { fetchExperiences } from '../../store/experiences'
import { getExperiences } from '../../store/experiences/reducer'
import { fetchClinicianExperiences } from '../../store/clinicianExperiences'
import { getClinicianExperience } from '../../store/clinicianExperiences/reducer'

const initialValues = {
  experiences: [{
    experienceId: 1,
    descrption: "One",
    years: 1
  }, {
    experienceId: 2,
    description: "Two",
    years: 2
  }]
}

class AccountExperiencePage extends Component {

  componentDidMount() {
    this.props.fetchExperiences()
    this.props.fetchClinicianExperiences()
  }

  render() {
    const listValues = {
      experiences: this.props.experiences
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ExperienceList initialValues={listValues} />
          </div>
        </div>
      </div>
    )
  }
}

const createExperienceItems = (state) => {
  const experiences = getExperiences(state.clinicians.experiences)

  return experiences.map(experience => {
    const clinicianExperience = getClinicianExperience(experience.id, state.clinicians.clinicianExperiences)
    return {
      experienceId: experience.id,
      description: experience.description,
      years: clinicianExperience ? clinicianExperience.years : null
    }
  })
}

const mapStateToProps = (state) => ({
  token: getClinicianToken(state),
  experiences: createExperienceItems(state)
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
