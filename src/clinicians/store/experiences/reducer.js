import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE
} from './actions'

const defaultState = {
  isLoading: false,
  experiences: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_EXPERIENCES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experiences: action.payload
      }
    case FETCH_EXPERIENCES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const getExperiences = (state) => {
  return state.clinicians.experiences.experiences
}
