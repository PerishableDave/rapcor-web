import {
  CREATE_CLINICIAN_REQUEST,
  CREATE_CLINICIAN_SUCCESS,
  CREATE_CLINICIAN_FAILURE,
  EDIT_CLINICIAN_REQUEST,
  EDIT_CLINICIAN_SUCCESS,
  EDIT_CLINICIAN_FAILURE
} from './actions'

export const createClinician = (dispatch) => {
  return async (clinician) => {
    const payload = {
      clinician: {
        first_name: clinician.firstName,
        last_name: clinician.lastName,
        middle_name: clinician.middle_name,
        email: clinician.email,
        phone_number: clinician.phoneNumber,
        thoroughfare: clinician.address,
        premise: clinician.address2,
        locality: clinician.city,
        administrative_area: clinician.state,
        postal_code: clinician.zip,
        country: clinician.country,
        password: clinician.password
      }
    }

    dispatch({
      type: CREATE_CLINICIAN_REQUEST
    })

    try {
      const response = await fetch('http://localhost:4000/v1/clinicians', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const json = await response.json()

      dispatch({
        type: CREATE_CLINICIAN_SUCCESS,
        payload: {
          clinician: json.clinician,
          token: json.token
        }
      })
    } catch (error) {
      dispatch({
        type: CREATE_CLINICIAN_FAILURE
      })
    }
  }
}

export const editClinician = (token) => {
  return (dispatch) => {
    return async (clinician) => {
      const payload = {
        clinician: clinician
      }

      dispatch({
        type: EDIT_CLINICIAN_REQUEST
      })

      try {
        const response = await fetch(`http://localhost:4000/v1/clinicians/${clinician.id}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const json = await response.json()

        dispatch({
          type: EDIT_CLINICIAN_SUCCESS,
          payload: {
            clinician: json.clinician
          }
        })
      } catch (error) {
        dispatch({
          type: EDIT_CLINICIAN_FAILURE
        })
      }
    }
  }
}
