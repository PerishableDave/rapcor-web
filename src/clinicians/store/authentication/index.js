import {
  CREATE_CLINICIAN_TOKEN_REQUEST,
  CREATE_CLINICIAN_TOKEN_SUCCESS,
  CREATE_CLINICIAN_TOKEN_FAILURE,
  CLEAR_CLINICIAN_TOKEN_ERROR
} from './actions'
import { 
  post,
  ApiUnauthorizedError
} from '../../../lib/rapcor-api'
import history from '../../../store/history'

export class ClinicianInvalidLoginError extends Error {
  constructor () {
    super("Invalid email or password.")
    this.name = "ClinicianInvalidLoginError"
  }
}

export const login = (dispatch) => {
  return async (email, password) => {
    const payload = {
      email: email,
      password: password
    }

    dispatch({
      type: CREATE_CLINICIAN_TOKEN_REQUEST
    })

    try {
      const json = await post('/v1/clinicians/tokens', payload)

      dispatch({
        type: CREATE_CLINICIAN_TOKEN_SUCCESS,
        payload: {
          token: json.token.id
        }
      })

      history.push('/clinicians/requests')
    } catch (error) {
      if (error.name === "ApiUnauthorizedError") {
        dispatch({
          type: CREATE_CLINICIAN_TOKEN_FAILURE,
          error: new ClinicianInvalidLoginError()
        })
      } else {
        dispatch({
          type: CREATE_CLINICIAN_TOKEN_FAILURE,
          error: error
        })
      }
    }
  }
}

export const clearClinicianLoginError = (dispatch) => {
  return async () => {
    dispatch({ type: CLEAR_CLINICIAN_TOKEN_ERROR })
  }
}

export const getClinicianToken = (store) => {
  return store.clinicians.authentication.token
}

export const isClinicianLoggedIn = (store) => {
  return store.clinicians.authentication.token !== null
}
