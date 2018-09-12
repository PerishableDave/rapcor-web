import { combineReducers } from 'redux'
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

const documentsBySlug = (state = new Map(), action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_SUCCESS:
    case CREATE_DOCUMENTS_SUCCESS:
      return action.payload.reduce((map, doc) => {
        return map.set(doc.slug, doc)
      }, state)
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_REQUEST:
    case EDIT_DOCUMENTS_REQUEST:
    case CREATE_DOCUMENTS_REQUEST:
      return true
    case FETCH_DOCUMENTS_SUCCESS:
    case FETCH_DOCUMENTS_FAILURE:
    case EDIT_DOCUMENTS_SUCCESS:
    case EDIT_DOCUMENTS_FAILURE:
    case CREATE_DOCUMENTS_SUCCESS:
    case CREATE_DOCUMENTS_FAILURE:
      return false
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_REQUEST:
    case EDIT_DOCUMENTS_REQUEST:
    case CREATE_DOCUMENTS_REQUEST:
      return null
    case FETCH_DOCUMENTS_FAILURE:
    case EDIT_DOCUMENTS_FAILURE:
    case CREATE_DOCUMENTS_FAILURE:
      return action.error
    default:
      return state
  }
}

export default combineReducers({
  documentsBySlug,
  isLoading,
  error
})

export const getDocumentBySlug = (state, slug) => {
  return state.clinicians.documents.documentsBySlug.get(slug)
}

export const getDocumentsIsLoading = (state) => {
  return state.clinicians.documents.isLoading
}
