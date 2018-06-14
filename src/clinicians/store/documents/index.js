import {
  FETCH_DOCUMENTS_REQUEST,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAILURE,
  EDIT_DOCUMENTS_REQUEST,
  EDIT_DOCUMENTS_SUCCESS,
  EDIT_DOCUMENTS_FAILURE,
  CREATE_DOCUMENTS_REQUEST,
  CREATE_DOCUMENTS_SUCCESS,
  CREATE_DOCUMENTS_FAILURE
} from './actions'
import { get, post, put } from '../../../lib/rapcor-api'
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
      const json = await get('/v1/clinicians/current/documents', token)

      const documents = json.documents.map((json) => { 
        return deserialize(json)
      })

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

export const createOrUpdateDocuments = (docs) => {
  return async (dispatch, getState) => {
    const token = getClinicianToken(getState())

    dispatch({
      type: CREATE_DOCUMENTS_REQUEST
    })

    try {
      const documents = await Promise.all(docs.map((doc) => {
        const request = doc.id ? updateDocument : createDocument
        return request(doc, token).then(json => {
          return json.document
        })
      }))

      dispatch({
        type: CREATE_DOCUMENTS_SUCCESS,
        payload: documents
      })
    } catch (error) {
      dispatch({
        type: CREATE_DOCUMENTS_FAILURE,
        error: error
      })
    }
  }
}

const updateDocument = (doc, token) => {
  const data = createDocumentFormData(doc)
  return put(`/v1/clinicians/current/documents/${doc.id}`, data, token)
}

const createDocument = (doc, token) => {
  const data = createDocumentFormData(doc)
  return post('/v1/clinicians/current/documents', data, token)
}

const createDocumentFormData = (doc) => {
  const formData = new FormData()

  formData.append('document[slug]', doc.slug)
  formData.append('document[number]', doc.number)
  formData.append('document[expiration]', doc.expiration)

  if (doc.frontPhoto) {
    formData.append('document[front_photo]', doc.frontPhoto)
  }

  if (doc.backPhoto) {
    formData.append('document[back_photo]', doc.backPhoto)
  }

  return formData
}
