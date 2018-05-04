import {
  CREATE_CLINICIAN_REQUEST,
  CREATE_CLINICIAN_SUCCESS,
  CREATE_CLINICIAN_FAILURE,
  EDIT_CLINICIAN_REQUEST,
  EDIT_CLINICIAN_SUCCESS,
  EDIT_CLINICIAN_FAILURE
} from './actions'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case CREATE_CLINICIAN_REQUEST:
      return state
    case CREATE_CLINICIAN_SUCCESS:
      return {
        ...state,
        clinician: payload.clinician
      }
    case CREATE_CLINICIAN_FAILURE:
      return state
    case EDIT_CLINICIAN_REQUEST:
      return state
    case EDIT_CLINICIAN_SUCCESS:
      return {
        ...state,
        clinician: payload.clinician
      }
    case EDIT_CLINICIAN_FAILURE:
      return state
    default:
      return state
  }
}
