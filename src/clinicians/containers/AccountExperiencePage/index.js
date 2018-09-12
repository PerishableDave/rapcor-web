import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import ExperienceList  from '../../components/ExperienceList'
import Loader from '../../../components/shared/Loader'
import { getClinicianToken } from '../../store/authentication'
import { fetchExperiences } from '../../../store/experiences'
import { getExperiences } from '../../../store/experiences/reducer'
import { fetchClinicianExperiences, updateClinicianExperiences } from '../../store/clinicianExperiences'
import { getClinicianExperience, getClinicianExperienceIsloading } from '../../store/clinicianExperiences/reducer'

class AccountExperiencePage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(form) {
    const { experiences } = form
    this.props.updateClinicianExperiences(experiences)
  }

  componentDidMount() {
    this.props.fetchExperiences()
    this.props.fetchClinicianExperiences()
  }

  render() {
    const loading = this.props.loading
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
            <Loader loading={loading}>
              <ExperienceList 
                initialValues={listValues}
                onSubmit={this.handleSubmit} />
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

const createExperienceItems = (state) => {
  const experiences = getExperiences(state)

  return experiences.map(experience => {
    const clinicianExperience = getClinicianExperience(experience.id, state)
    return {
      experienceId: experience.id,
      description: experience.description,
      years: clinicianExperience ? clinicianExperience.years : null
    }
  })
}

const mapStateToProps = (state) => ({
  token: getClinicianToken(state),
  experiences: createExperienceItems(state),
  loading: getClinicianExperienceIsloading(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchExperiences: fetchExperiences(dispatch),
  fetchClinicianExperiences: fetchClinicianExperiences(dispatch),
  updateClinicianExperiences: updateClinicianExperiences(dispatch)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  fetchClinicianExperiences: dispatchProps.fetchClinicianExperiences(stateProps.token),
  updateClinicianExperiences: dispatchProps.updateClinicianExperiences(stateProps.token)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AccountExperiencePage)
