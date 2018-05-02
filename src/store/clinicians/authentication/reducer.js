import {
  CREATE_CLINICIAN_TOKEN_REQUEST,
  CREATE_CLINICIAN_TOKEN_SUCCESS,
  CREATE_CLINICIAN_TOKEN_FAILURE
} from './actions'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case CREATE_CLINICIAN_TOKEN_REQUEST:
      return state
    case CREATE_CLINICIAN_TOKEN_SUCCESS:
      return {...state, token: payload.token}
    case CREATE_CLINICIAN_TOKEN_FAILURE:
      return state
    default:
      return state
  }
}

