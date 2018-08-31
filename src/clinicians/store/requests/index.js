import {
  FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE
} from './actions'
import { get, post } from '../../../lib/rapcor-api'
import { serializePhone, deserializePhone } from '../../../lib/serializer-helpers'
import { getClinicianToken } from '../authentication/reducer'

const deserialize = (json) => {
  const requestBid = json.request_bid
  const request = requestBid.request
  const provider = request.provider

  return {
    slug: requestBid.slug,
    id: requestBid.id,
    status: request.status,
    startDate: request.start_date,
    endDate: request.end_date,
    notes: request.notes,
    contactPhone: request.contact_phone,
    contactEmail: request.contact_email,
    provider: {
      name: provider.name,
      thoroughfare: provider.thoroughfare,
      subAdministrativeArea: provider.sub_administrative_area,
      premise: provider.premise,
      postalCode: provider.postal_code,
      locality: provider.locality,
      country: provider.country,
      administrativeArea: provider.administrative_area
    }
  }
}

export const fetchClinicianRequestBidBySlug = (slug) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST })

    try {
      const json = await get(`/v1/clinicians/request-bids/${slug}`)
      const payload = deserialize(json)

      dispatch({
        type: FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
        payload: {
          requestBid: payload
        }
      })
    } catch (error) {
      dispatch({
        type: FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
        error: error
      })
    }
  }
}

export const acceptClinicianRequestBidBySlug = (slug) => {
  return async (dispatch, getState) => {
    dispatch({ type: ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST })

    try {
      const json = await post(`/v1/clinicians/request-bids/${slug}/accept`)

      dispatch({
        type: ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS
      })

    } catch (error) {
      dispatch({
        type: FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
        error: error
      })
    }
  }
}
