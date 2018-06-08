import { combineReducers } from 'redux'
import {
  CREATE_CLINICIAN_REQUEST,
  CREATE_CLINICIAN_SUCCESS,
  CREATE_CLINICIAN_FAILURE,
  EDIT_CLINICIAN_REQUEST,
  EDIT_CLINICIAN_SUCCESS,
  EDIT_CLINICIAN_FAILURE,
  FETCH_CURRENT_CLINICIAN_REQUEST,
  FETCH_CURRENT_CLINICIAN_SUCCESS,
  FETCH_CURRENT_CLINICIAN_FAILURE
} from './actions'

export const clinician = (state = null, { type, payload }) => {
  switch (type) {
    case CREATE_CLINICIAN_SUCCESS:
    case EDIT_CLINICIAN_SUCCESS:
      return payload.clinician
    case FETCH_CURRENT_CLINICIAN_SUCCESS:
      return payload
    default:
      return state
  }
}

export const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case CREATE_CLINICIAN_REQUEST:
    case EDIT_CLINICIAN_REQUEST:
    case FETCH_CURRENT_CLINICIAN_REQUEST:
      return true
    case CREATE_CLINICIAN_SUCCESS:
    case CREATE_CLINICIAN_FAILURE:
    case EDIT_CLINICIAN_SUCCESS:
    case EDIT_CLINICIAN_FAILURE:
    case FETCH_CURRENT_CLINICIAN_SUCCESS:
    case FETCH_CURRENT_CLINICIAN_FAILURE:
      return false
    default:
       return state
  }
}

export const error = (state = null, { type, error }) => {
  switch (type) {
    case CREATE_CLINICIAN_REQUEST:
    case EDIT_CLINICIAN_REQUEST:
    case FETCH_CURRENT_CLINICIAN_REQUEST:
      return null
    case CREATE_CLINICIAN_FAILURE:
    case EDIT_CLINICIAN_FAILURE:
    case FETCH_CURRENT_CLINICIAN_FAILURE:
      return error
    default:
      return state
  }
}

export default combineReducers({
  clinician,
  isLoading,
  error
})

export const getCurrentClinician = (state) => {
  return state.clinicians.account.clinician
}

export const getClinicianIsLoading = (state) => {
  return state.clinicians.account.isLoading
}
