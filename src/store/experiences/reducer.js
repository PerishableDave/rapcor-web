import { combineReducers } from 'redux'
import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE,
} from './actions'

const experiences = (state = [], action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_SUCCESS:
      return action.payload
    default:
      return state
  }
}
const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
      return true
    case FETCH_EXPERIENCES_SUCCESS:
    case FETCH_EXPERIENCES_FAILURE:
      return false
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_FAILURE:
      return action.error
    case FETCH_EXPERIENCES_REQUEST:
    case FETCH_EXPERIENCES_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({
  experiences,
  isLoading,
  error
})

export const getExperiences = (state) => {
  return state.experiences.experiences
}

export const isExperiencesLoading = (state) => {
  return state.experiences.isLoading
}
