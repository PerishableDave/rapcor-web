import { combineReducers } from 'redux'
import {
  CREATE_PROVIDER_TOKEN_REQUEST,
  CREATE_PROVIDER_TOKEN_SUCCESS,
  CREATE_PROVIDER_TOKEN_FAILURE
} from './actions'

const token = (state = null, {type, payload}) => {
  switch (type) {
    case CREATE_PROVIDER_TOKEN_SUCCESS:
      return payload.token
    default:
      return state
  }
}

const error = (state = null, {type, payload, error}) => {
  switch (type) {
    case CREATE_PROVIDER_TOKEN_REQUEST:
    case CREATE_PROVIDER_TOKEN_SUCCESS:
      return null
    case CREATE_PROVIDER_TOKEN_FAILURE:
      return error
    default:
      return state
  }
}

const isLoading = (state = false, { type }) => {
  switch (type) {
    case CREATE_PROVIDER_TOKEN_REQUEST:
      return true
    case CREATE_PROVIDER_TOKEN_SUCCESS:
    case CREATE_PROVIDER_TOKEN_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  token,
  error,
  isLoading
})

export const getProviderToken = state => {
  return state.providers.authentication.token
}
