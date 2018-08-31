import { combineReducers } from 'redux'
import {
  FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE
} from './actions'

const requestBidsBySlug = (state = new Map(), { type, payload }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
      const requestBid = payload.requestBid
      return state.set(requestBid.slug, requestBid)
    default:
      return state
  }
}

const isLoading = (state = false, { type }) => {
  switch (type) {
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST:
      return true
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
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
      return null
    case FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
    case ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE:
      return error
    default:
      return state
  }
}

export default combineReducers({
  requestBidsBySlug,
  isLoading,
  error
})

export const getRequestBidBySlug = (state, slug) => {
  return state.clinicians.requests.requestBidsBySlug.get(slug)
}
