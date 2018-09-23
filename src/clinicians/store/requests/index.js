import {
  FETCH_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
  FETCH_CLINICIAN_REQUEST_BIDS_REQUEST,
  FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS,
  FETCH_CLINICIAN_REQUEST_BIDS_FAILURE,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
  ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE
} from './actions'
import { get, post } from '../../../lib/rapcor-api'
import { serializePhone, deserializePhone } from '../../../lib/serializer-helpers'
import { getClinicianToken } from '../authentication/reducer'

const deserialize = (requestBid) => {
  const provider = requestBid.provider

  return {
    slug: requestBid.slug,
    id: requestBid.id,
    status: requestBid.status,
    startDate: requestBid.start_date,
    endDate: requestBid.end_date,
    notes: requestBid.notes,
    contactPhone: requestBid.contact_phone,
    contactEmail: requestBid.contact_email,
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
      const json = await get(`/v1/clinicians/request-bids/slug/${slug}`)
      const payload = deserialize(json.request_bid)

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

export const fetchClinicianRequestBids = () => {
  return async (dispatch, getState) => {
    const token = getClinicianToken(getState())

    dispatch({ type: FETCH_CLINICIAN_REQUEST_BIDS_REQUEST  })

    try {
      const json = await get('/v1/clinicians/current/request-bids', token)

      const requestBids = json.request_bids.map(json => { return deserialize(json) })

      dispatch({
        type: FETCH_CLINICIAN_REQUEST_BIDS_SUCCESS,
        payload: {
          requestBids: requestBids
        }
      })

    } catch (error) {
      dispatch({
        type: FETCH_CLINICIAN_REQUEST_BIDS_FAILURE,
        error: error
      })
    }
  }
}

export const acceptClinicianRequestBidBySlug = (slug) => {
  return async (dispatch, getState) => {
    dispatch({ type: ACCEPT_CLINICIAN_REQUEST_BID_SLUG_REQUEST })

    try {
      const json = await post(`/v1/clinicians/request-bids/slug/${slug}/accept`)
      const payload = deserialize(json.request_bid)

      dispatch({
        type: ACCEPT_CLINICIAN_REQUEST_BID_SLUG_SUCCESS,
        payload: {
          requestBid: payload
        }
      })

    } catch (error) {
      dispatch({
        type: ACCEPT_CLINICIAN_REQUEST_BID_SLUG_FAILURE,
        error: error
      })
    }
  }
}
