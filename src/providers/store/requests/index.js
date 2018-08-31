import {
  CREATE_REQUEST_REQUEST,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST_FAILURE,
  FETCH_PROVIDER_REQUESTS_REQUEST,
  FETCH_PROVIDER_REQUESTS_SUCCESS,
  FETCH_PROVIDER_REQUESTS_FAILURE
} from './actions'
import { post, get } from '../../../lib/rapcor-api'
import { serializePhone, deserializePhone } from '../../../lib/serializer-helpers'
import history from '../../../store/history'
import { getProviderToken } from '../authentication/reducer'

const serialize = (request) => {
  const serializeRequestExperiences = (requestExperiences) => {
    if (requestExperiences == null) {
      return []
    }

    requestExperiences.map((requestExperience) => {
      return {
        experience_id: requestExperience.experienceId,
        minimum_years: requestExperience.minimumYears
      }
    })
  }

  return {
    contact_email: request.contactEmail,
    contact_phone: serializePhone(request.contactPhone),
    start_date: request.startDate,
    end_date: request.endDate,
    notes: request.notes,
    request_experiences: serializeRequestExperiences(request.requestExperiences)
  }
}

const deserialize = (payload) => {
  return {
    id: payload.id,
    contactEmail: payload.contact_email,
    contactPhone: deserializePhone(payload.contact_phone),
    startDate: payload.start_date,
    endDate: payload.end_date,
    notes: payload.notes,
    status: payload.status
  }
}

export const createRequest = (request) => {
  return async (dispatch, getState) => {
    const token = getProviderToken(getState())

    dispatch({ type: CREATE_REQUEST_REQUEST })

    const payload = {
      request: serialize(request)
    }

    try {
      const json = await post('/v1/providers/current/requests', payload, token)
      const request = deserialize(json.request)

      dispatch({
        type: CREATE_REQUEST_SUCCESS,
        payload: {
          request
        }
      })

      history.push('/providers/requests')
    } catch (error) {
      dispatch({
        type: CREATE_REQUEST_FAILURE,
        error: error
      })
    }
  }
}

export const fetchProviderRequests = (request) => {
  return async (dispatch, getState) => {
    const token = getProviderToken(getState())

    dispatch({ type: FETCH_PROVIDER_REQUESTS_REQUEST })

    try {
      const json = await get('/v1/providers/current/requests', token)
      const requests = json.requests.map(json => deserialize(json))

      dispatch({
        type: FETCH_PROVIDER_REQUESTS_SUCCESS,
        payload: { requests }
      })
    } catch (error) {
      dispatch({
        type: FETCH_PROVIDER_REQUESTS_FAILURE,
        error: error
      })
    }
  }
}
