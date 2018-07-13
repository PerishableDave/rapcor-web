import {
  CREATE_CLINICIAN_TOKEN_REQUEST,
  CREATE_CLINICIAN_TOKEN_SUCCESS,
  CREATE_CLINICIAN_TOKEN_FAILURE
} from './actions'
import { post } from '../../../lib/rapcor-api'
import history from '../../../store/history'

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

      history.push('/clinicians/account')
    } catch (error) {
      dispatch({
        type: CREATE_CLINICIAN_TOKEN_FAILURE,
        error: error
      })
    }
  }
}

export const getClinicianToken = (store) => {
  return store.clinicians.authentication.token
}

export const isClinicianLoggedIn = (store) => {
  return store.clinicians.authentication.token !== null
}
