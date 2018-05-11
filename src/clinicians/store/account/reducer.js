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

export default (state = {}, {type, payload}) => {
  switch (type) {
    case CREATE_CLINICIAN_REQUEST:
      return {...state, isLoading: true}
    case CREATE_CLINICIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clinician: payload.clinician
      }
    case CREATE_CLINICIAN_FAILURE:
      return {...state, isLoading: false}
    case EDIT_CLINICIAN_REQUEST:
      return {...state, isLoading: true}
    case EDIT_CLINICIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clinician: payload.clinician
      }
    case EDIT_CLINICIAN_FAILURE:
      return {...state, isLoading: false}
    case FETCH_CURRENT_CLINICIAN_REQUEST:
      return {...state, isLoading: true}
    case FETCH_CURRENT_CLINICIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clinician: payload.clinician
      }
    case FETCH_CURRENT_CLINICIAN_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export const getCurrentClinician = (state) => {
  return state.clinicians.account.clinician
}

export const getClinicianIsLoading = (state) => {
  return state.clinicians.account.isLoading
}
