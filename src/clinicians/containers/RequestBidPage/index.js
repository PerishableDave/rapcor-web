import React, { Component } from 'react'
import { connect } from 'react-redux'

import RequestDetails from '../../components/RequestDetails'
import Loader from '../../../components/shared/Loader'
import { fetchClinicianRequestBidBySlug, acceptClinicianRequestBidBySlug } from '../../store/requests'
import { getRequestBidBySlug } from '../../store/requests/reducer'

class RequestBidPage extends Component {
  constructor(props) {
    super(props)

    this.handleAccept = this.handleAccept.bind(this)
  }

  componentDidMount() {
    const slug = this.props.match.params.slug

    this.props.dispatch(fetchClinicianRequestBidBySlug(slug))
  }

  handleAccept() {
    console.log("handle accept")
  }

  render() {
    const { requestBid } = this.props
    const details = requestBid ? (<RequestDetails requestBid={requestBid} />) : (<Loader />)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            { details }
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={this.handleAccept} >Accept</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    requestBid: getRequestBidBySlug(state, props.match.params.slug)
})

export default connect(mapStateToProps)(RequestBidPage)
