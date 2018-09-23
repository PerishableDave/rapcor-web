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

const requestBidsBySlug = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:

      const requestBid = payload.requestBid
      return {
        ...state,
        [requestBid.slug]: requestBid
      }
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      const requestBids = payload.requestBids
      return requestBids.reduce((map, requestBid) => {
        return {
          ...map,
          [requestBid.slug]: requestBid
        }
      }, state)
    default:
      return state
  }
}

const requestBidsById = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
      const requestBid = payload.requestBid
      return {
        ...state,
        [requestBid.id]: requestBid
      }
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      const requestBids = payload.requestBids
      return requestBids.reduce((obj, requestBid) => {
        return {
          ...obj,
          [requestBid.id]: requestBid
        }
      }, state)
    default:
      return state
  }
}

const requestBids = (state = [], {type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS:
      return payload.requestBids.sort((a, b) => {
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
  requestBids,
  isLoading,
  error
})

export const getRequestBidBySlug = (state, slug) => {
  return state.clinicians.requests.requestBidsBySlug[slug]
}

export const getOpenRequestBids = (state) => {
  const { requestBids, requestBidsById } = state.clinicians.requests

  return requestBids.map(id => {
    return requestBidsById[id]
  }).filter((requestBid) => {
    return requestBid.status === "open"
  })
}

export const getAcceptedRequestBids = (state) => {
  const { requestBids, requestBidsById } = state.clinicians.requests

  return requestBids.map(id => {
    return requestBidsById[id]
  }).filter((requestBid) => {
    return requestBid.status === "fulfilled"
  })
}

export const getRequestBidsIsLoading = (state) => {
	return state.clinicians.requests.isLoading
}
