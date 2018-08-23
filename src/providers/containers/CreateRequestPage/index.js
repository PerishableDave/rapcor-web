import React, { Component } from 'react'
import { connect } from 'react-redux'

import RequestForm from '../../components/RequestForm'
import { fetchExperiences } from '../../../store/experiences'
import { getExperiences } from '../../../store/experiences/reducer'

class CreateRequestPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchExperiences()
  }

  handleSubmit(vals) {
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-9 mx-auto">
          <RequestForm
            onSubmit={this.handleSubmit}
            experiences={this.props.experiences} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  experiences: getExperiences(state)
})

const mapDispatchToProps = dispatch => ({
  fetchExperiences: fetchExperiences(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequestPage)
