import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import ExperienceList from '../../components/ExperienceList'
import { fetchExperiences } from '../../store/experiences'
import { getExperiences } from '../../store/experiences/reducer'

class AccountExperiencePage extends Component {

  componentDidMount() {
    fetchExperiences()
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
            <ExperienceList experiences={ this.props.experiences } />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  experiences: getExperiences(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchExperiences: fetchExperiences(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountExperiencePage)
