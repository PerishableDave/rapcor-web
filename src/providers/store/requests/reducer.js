import { combineReducers } from 'redux'
import {
  CREATE_REQUEST_REQUEST,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST_FAILURE,
  FETCH_PROVIDER_REQUESTS_REQUEST,
  FETCH_PROVIDER_REQUESTS_SUCCESS,
  FETCH_PROVIDER_REQUESTS_FAILURE
} from './actions'

export const requestsById = (state = new Map(), { type, payload }) => {
  switch (type) {
    case CREATE_REQUEST_SUCCESS:
      const request = payload.request
      return state.set(request.id, request)
    case FETCH_PROVIDER_REQUESTS_SUCCESS:
      const requests = payload.requests
      return requests.reduce((map, request) => { return map.set(request.id, request) }, state)
    default:
      return state
  }
}

export const requestIdsByDate = (state = null, { type, payload}) => {
  switch (type) {
    case FETCH_PROVIDER_REQUESTS_SUCCESS:
      const requests = payload.requests
      return requests.map(request => { return request.id })
    default:
      return state
  }
}

export const isLoading = (state = false, { type }) => {
  switch (type) {
    case CREATE_REQUEST_REQUEST:
    case FETCH_PROVIDER_REQUESTS_REQUEST:
      return true
    case CREATE_REQUEST_SUCCESS:
    case CREATE_REQUEST_FAILURE:
    case FETCH_PROVIDER_REQUESTS_SUCCESS:
    case FETCH_PROVIDER_REQUESTS_FAILURE:
      return false
    default:
      return state
  }
}

export const error = (state = null, { type, error }) => {
  switch (type) {
    case CREATE_REQUEST_REQUEST:
    case CREATE_REQUEST_SUCCESS:
    case FETCH_PROVIDER_REQUESTS_REQUEST:
    case FETCH_PROVIDER_REQUESTS_SUCCESS:
      return null
    case CREATE_REQUEST_FAILURE:
    case FETCH_PROVIDER_REQUESTS_FAILURE:
      return error
    default:
      return state
  }
}

export default combineReducers({
  requestsById,
  requestIdsByDate,
  isLoading,
  error
})

export const getRequestsByDate = state => {
  const { requestIdsByDate, requestsById } = state.providers.requests

  if (!requestIdsByDate) {
    return null
  }

  return requestIdsByDate.map(requestId => requestsById.get(requestId))
}
