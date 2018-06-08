import {
  FETCH_DOCUMENTS_REQUEST,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAILURE,
  EDIT_DOCUMENTS_REQUEST,
  EDIT_DOCUMENTS_SUCCESS,
  EDIT_DOCUMENTS_FAILURE
} from './actions'
import { get } from '../../../lib/rapcor-api'
import { getClinicianToken } from '../authentication/reducer'

const deserialize = (json) => {
  return {
    slug: json.slug,
    state: json.state,
    number: json.number,
    id: json.id,
    expiration: json.expiration,
    frontPhoto: json.front_photo,
    backPhoto: json.back_photo
  }
}

export const fetchDocuments = () => {
  return async (dispatch, getState) => {
    const token = getClinicianToken(getState())

    dispatch({
      type: FETCH_DOCUMENTS_REQUEST
    })

    try {
      const json = await get('/v1/clinicians/current/documents')

      const documents = json.map((json) => { deserialize(json) })
      dispatch({
        type: FETCH_DOCUMENTS_SUCCESS,
        payload: documents
      })

    } catch (error) {
      dispatch({
        type: FETCH_DOCUMENTS_FAILURE,
        error: error
      })
    }
  }
}

