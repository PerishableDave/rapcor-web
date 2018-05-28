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
import { RAPCOR_API } from '../../../store/rapcor-api'
import { login } from '../authentication'
import { serialize, deserialize } from './serializer'

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
  return () => {
    dispatch({
      type: RAPCOR_API,
      types: [
        FETCH_CURRENT_CLINICIAN_REQUEST,
        FETCH_CURRENT_CLINICIAN_SUCCESS,
        FETCH_CURRENT_CLINICIAN_FAILURE
      ],
      config: {
        url: '/v1/clinicians/current'
      }
    })
  }
}
