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
    console.log("handle accept")
  }

  render() {
    const { requestBid, loading } = this.props

		return (
			<Loader loading={loading}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<RequestDetails
								requestBid={requestBid} />

						</div>
					</div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <button className="btn btn-success float-right" onClick={this.handleAccept} >Accept</button>
            </div>
          </div>
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
