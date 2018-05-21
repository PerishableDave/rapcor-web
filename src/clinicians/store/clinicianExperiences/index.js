import {
  FETCH_CLINICIAN_EXPERIENCES_REQUEST,
  FETCH_CLINICIAN_EXPERIENCES_SUCCESS,
  FETCH_CLINICIAN_EXPERIENCES_FAILURE,
  UPDATE_CLINICIAN_EXPERIENCES_REQUEST,
  UPDATE_CLINICIAN_EXPERIENCES_SUCCESS,
  UPDATE_CLINICIAN_EXPERIENCES_FAILURE
} from './actions'
import { get, post } from '../../../lib/rapcor-api'

const deserializeClinicianExperience = (json) => {
  return {
    experienceId: json.experience_id,
    years: json.years
  }
}

const serializeClinicianExperience = (clinicianExperience) => {
  return {
    experience_id: clinicianExperience.experienceId,
    years: clinicianExperience.years
  }
}

export const fetchClinicianExperiences = (dispatch) => {
  return (token) => {
    return async () => {
      dispatch({ type: FETCH_CLINICIAN_EXPERIENCES_REQUEST })

      try {
        const json = await get('/v1/clinicians/current/experiences', token)
        const clinicianExperiences = json.clinician_experiences.map(json => deserializeClinicianExperience(json))

        dispatch({
          type: FETCH_CLINICIAN_EXPERIENCES_SUCCESS,
          payload: clinicianExperiences
        })
      } catch (error) {
        dispatch({
          type: FETCH_CLINICIAN_EXPERIENCES_FAILURE,
          error: error
        })
      }
    }
  }
}

export const updateClinicianExperiences = (dispatch) => {
  return (token) => {
    return async (clinicianExperiences) => {
      dispatch({ type: UPDATE_CLINICIAN_EXPERIENCES_REQUEST })

      const clinicianExperiencesJson = clinicianExperiences.map(clinicianExperience => serializeClinicianExperience(clinicianExperience))
      const payload = {
        clinician_experiences: clinicianExperiencesJson
      }

      try {
        const json = await post('/v1/clinicians/current/experiences', payload, token)
        const clinicianExperiences = json.clinician_experiences.map(json => deserializeClinicianExperience(json))

        dispatch({
          type: UPDATE_CLINICIAN_EXPERIENCES_SUCCESS,
          payload: clinicianExperiences
        })
      } catch (error) {
        dispatch({
          type: UPDATE_CLINICIAN_EXPERIENCES_FAILURE,
          error: error
        })
      }
    }
  }
}
