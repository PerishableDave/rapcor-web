import { combineReducers } from 'redux'
import {
  CREATE_PROVIDER_REQUEST,
  CREATE_PROVIDER_SUCCESS,
  CREATE_PROVIDER_FAILURE
} from './actions'

export const provider = (state = null, { type, payload}) => {
  switch (type) {
    default:
      return state
  }
}

export const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case CREATE_PROVIDER_REQUEST:
      return true
    case CREATE_PROVIDER_SUCCESS:
    case CREATE_PROVIDER_FAILURE:
      return false
    default:
      return state
  }
}

export const error = (state = null, { type, error }) => {
  switch (type) {
    case CREATE_PROVIDER_REQUEST:
    case CREATE_PROVIDER_SUCCESS:
      return null
    case CREATE_PROVIDER_FAILURE:
      return error
    default: 
      return state
  }
}

export default combineReducers({
  provider,
  isLoading
  error
})
