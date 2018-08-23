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
import { getClinicianToken } from '../authentication/reducer'
import { login } from '../authentication'
import { serialize, deserialize } from './serializer'

export const createClinician = (dispatch) => {
  return async (clinician) => {
    clinician.country = "US"

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

export const editClinician = (clinician) => {
  return async (dispatch, getState) => {
    const token = getClinicianToken(getState())

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

export const fetchCurrentClinician = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_CURRENT_CLINICIAN_REQUEST
    })

    const token = getClinicianToken(getState())

    try {
      const json = await get('/v1/clinicians/current', token)

      dispatch({
        type: FETCH_CURRENT_CLINICIAN_SUCCESS,
        payload: deserialize(json)
      })
    } catch (error) {
      dispatch({
        type: FETCH_CURRENT_CLINICIAN_FAILURE,
        error: error
      })
    }
  }
}
