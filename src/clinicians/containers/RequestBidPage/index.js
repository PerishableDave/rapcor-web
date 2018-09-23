import React, { Component } from 'react'
import { connect } from 'react-redux'

import RequestDetails from '../../components/RequestDetails'
import Loader from '../../../components/shared/Loader'
import { fetchClinicianRequestBidBySlug, acceptClinicianRequestBidBySlug } from '../../store/requests'
import { getRequestBidBySlug, getRequestBidsIsLoading } from '../../store/requests/reducer'

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
    const slug = this.props.requestBid.slug
    this.props.dispatch(acceptClinicianRequestBidBySlug(slug))
  }

  render() {
    const { requestBid, loading } = this.props

    const acceptButton = requestBid && requestBid.status === "open" ? (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <button className="btn btn-success float-right" onClick={this.handleAccept} >Accept</button>
        </div>
      </div>
    ) : null

		return (
			<Loader loading={loading}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<RequestDetails
								requestBid={requestBid} />

						</div>
					</div>

          { acceptButton }
				</div>
			</Loader>
		)
  }
}

const mapStateToProps = (state, props) => ({
    requestBid: getRequestBidBySlug(state, props.match.params.slug),
		loading: getRequestBidsIsLoading(state)
})

export default connect(mapStateToProps)(RequestBidPage)
