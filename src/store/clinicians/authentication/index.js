import {
  CREATE_CLINICIAN_TOKEN_REQUEST,
  CREATE_CLINICIAN_TOKEN_SUCCESS,
  CREATE_CLINICIAN_TOKEN_FAILURE
} from './actions'
import history from '../../history'

export const createClinicianToken = (dispatch) => {
  return async (email, password) => {
    const payload = {
      email: email,
      password: password
    }

    dispatch({
      type: CREATE_CLINICIAN_TOKEN_REQUEST
    })

    try {
      const response = await fetch('http://localhost:4000/v1/clinicians/tokens', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const json = await response.json()

      dispatch({
        type: CREATE_CLINICIAN_TOKEN_SUCCESS,
        payload: {
          token: json.data.id
        }
      })

      history.push('/clinicians/account')
    } catch (error) {
      dispatch({
        type: CREATE_CLINICIAN_TOKEN_FAILURE
      })
    }
  }
}
