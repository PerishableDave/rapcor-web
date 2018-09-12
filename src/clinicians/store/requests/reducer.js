import { combineReducers } from 'redux'
import {
  FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
  FETCH_CLINICIAN_REQUEST_BIDS_REQUEST,
  FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BIDS_FAILURE,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE
} from './actions'
import moment from 'moment'

const REQUEST_BID_STATUS_OPEN = "open"
const REQUEST_BID_STATUS_FULFILLED = "fulfilled"
const REQUEST_BID_STATUS_CANCELLED = "cancelled"

const requestBidsBySlug = (state = new Map(), { type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
      const requestBid = payload.requestBid
      return state.set(requestBid.slug, requestBid)
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      const requestBids = payload.requestBids
      return requestBids.reduce((map, requestBid) => {
        return map.set(requestBid.slug, requestBid)
      }, state)
    default:
      return state
  }
}

const requestBidsById = (state = new Map(), { type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
      const requestBid = payload.requestBid
      return state.set(requestBid.id, requestBid)
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      const requestBids = payload.requestBids
      return requestBids.reduce((map, requestBid) => {
        return map.set(requestBid.id, requestBid)
      }, state)
    default:
      return state
  }
}

const openRequestBidIds = (state = [], {type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      return payload.requestBids.filter((requestBid) => {
        return requestBid.status === REQUEST_BID_STATUS_OPEN
      }).sort((a, b) => {
        return moment(a.startDate).unix() - moment(b.startDate).unix()
      }).map((requestBid) => {
        return requestBid.id
      })
    default:
      return state
  }
}

const acceptedRequestBidIds = (state = [], {type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      return payload.requestBids.filter((requestBid) => {
        return requestBid.status === REQUEST_BID_STATUS_FULFILLED
      }).sort((a, b) => {
        return moment(a.startDate).unix() - moment(b.startDate).unix()
      }).map((requestBid) => {
        return requestBid.id
      })
    default:
      return state
  }
}

const isLoading = (state = false, { type }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
    case FETCH_CLINICIAN_REQUEST_BIDS_REQUEST:
      return true
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
    case FETCH_CLINICIAN_REQUEST_BIDS_FAILURE:
      return false
    default:
      return state
  }
}

const error = (state = null, { type, error }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case FETCH_CLINICIAN_REQUEST_BIDS_REQUEST:
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      return null
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case FETCH_CLINICIAN_REQUEST_BIDS_FAILURE:
      return error
    default:
      return state
  }
}

export default combineReducers({
  requestBidsBySlug,
  requestBidsById,
  openRequestBidIds,
  acceptedRequestBidIds,
  isLoading,
  error
})

export const getRequestBidBySlug = (state, slug) => {
  return state.clinicians.requests.requestBidsBySlug.get(slug)
}

export const getOpenRequestBids = (state) => {
  const { openRequestBidIds, requestBidsById } = state.clinicians.requests

  return openRequestBidIds.map(id => { return requestBidsById.get(id) })
}

export const getAcceptedRequestBids = (state) => {
  const { acceptedRequestBidIds, requestBidsById } = state.clinicians.requests

  return acceptedRequestBidIds.map(id => { return requestBidsById.get(id) })
}

export const getRequestBidsIsLoading = (state) => {
	return state.clinicians.requests.isLoading
}
