import { combineReducers } from 'redux'
import {
  FETCH_CLINICIAN_EXPERIENCES_REQUEST,
  FETCH_CLINICIAN_EXPERIENCES_SUCCESS,
  FETCH_CLINICIAN_EXPERIENCES_FAILURE,
  UPDATE_CLINICIAN_EXPERIENCES_REQUEST,
  UPDATE_CLINICIAN_EXPERIENCES_SUCCESS,
  UPDATE_CLINICIAN_EXPERIENCES_FAILURE
} from './actions'

const clinicianExperiencesByExperienceId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLINICIAN_EXPERIENCES_SUCCESS:
    case UPDATE_CLINICIAN_EXPERIENCES_SUCCESS:
      const clinicianExperiences = action.payload
      return clinicianExperiences.reduce((state, clinicianExperience) => {
        return {
          ...state,
          [clinicianExperience.experienceId]: clinicianExperience
        }
      }, state)
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_CLINICIAN_EXPERIENCES_REQUEST:
      return true
    case FETCH_CLINICIAN_EXPERIENCES_SUCCESS:
    case FETCH_CLINICIAN_EXPERIENCES_FAILURE:
      return false
    case UPDATE_CLINICIAN_EXPERIENCES_REQUEST:
      return true
    case UPDATE_CLINICIAN_EXPERIENCES_SUCCESS:
    case UPDATE_CLINICIAN_EXPERIENCES_FAILURE:
      return false
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_CLINICIAN_EXPERIENCES_REQUEST:
    case FETCH_CLINICIAN_EXPERIENCES_SUCCESS:
    case UPDATE_CLINICIAN_EXPERIENCES_REQUEST:
    case UPDATE_CLINICIAN_EXPERIENCES_SUCCESS:
      return null
    case FETCH_CLINICIAN_EXPERIENCES_FAILURE:
    case UPDATE_CLINICIAN_EXPERIENCES_FAILURE:
      return action.error
    default:
      return state
  }
}

export default combineReducers({
  clinicianExperiencesByExperienceId,
  isLoading,
  error
})

export const getClinicianExperience = (experienceId, state) => {
  return state.clinicians.clinicianExperiences.clinicianExperiencesByExperienceId[experienceId]
}

export const getClinicianExperienceIsloading = (state) => {
  return state.clinicians.clinicianExperiences.isLoading
}
