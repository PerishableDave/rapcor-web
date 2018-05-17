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
import { post, get, put } from '../../../lib/rapcor-api'
import { login } from '../authentication'

const deserialize = (json) => {
  const { clinician } = json

  return {
    firstName: clinician.first_name,
    lastName: clinician.last_name,
    middleName: clinician.middle_name,
    email: clinician.email,
    phoneNumber: clinician.phone_number,
    address: clinician.thoroughfare,
    address2: clinician.premise,
    city: clinician.locality,
    state: clinician.administrative_area,
    zip: clinician.postal_code,
    country: clinician.country,
  }
}

const serialize = (clinician) => {
  return {
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
 
export const createClinician = (dispatch) => {
  return async (clinician) => {
    const payload = {
      clinician: serialize(clinician)
    }

    dispatch({
      type: CREATE_CLINICIAN_REQUEST
    })

    try {
      const json = await post('/v1/clinicians', payload)
      
      dispatch({
        type: CREATE_CLINICIAN_SUCCESS,
        payload: {
          clinician: deserialize(json)
        }
      })

      login(dispatch)(clinician.email, clinician.password)
    } catch (error) {
      dispatch({
        type: CREATE_CLINICIAN_FAILURE
      })
    }
  }
}

export const editClinician = (dispatch) => {
  return (token) => {
    return async (clinician) => {
      const payload = {
        clinician: serialize(clinician)
      }

      dispatch({
        type: EDIT_CLINICIAN_REQUEST
      })

      try {
        const json = await put('/v1/clinicians/current', payload, token)

        dispatch({
          type: EDIT_CLINICIAN_SUCCESS,
          payload: {
            clinician: deserialize(json)
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

export const fetchCurrentClinician = (dispatch) => {
  return (token) => {
    return async (clinician) => {
      dispatch({
        type: FETCH_CURRENT_CLINICIAN_REQUEST
      })

      try {
        const json = await get('/v1/clinicians/current', token)
        dispatch({
          type: FETCH_CURRENT_CLINICIAN_SUCCESS,
          payload: {
            clinician: deserialize(json)
          }
        })
      } catch (error) {
        dispatch({
          type: FETCH_CURRENT_CLINICIAN_FAILURE
        })
      }
    }
  }
}
