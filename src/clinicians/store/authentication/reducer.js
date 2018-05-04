import {
  CREATE_CLINICIAN_TOKEN_REQUEST,
  CREATE_CLINICIAN_TOKEN_SUCCESS,
  CREATE_CLINICIAN_TOKEN_FAILURE
} from './actions'

const initialState = {
  token: null
}

export default (state = initialState, {type, payload}) => {
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

