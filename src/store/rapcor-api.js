import { rapcorApiUrl } from '../config'
import { getClinicianToken } from '../clinicians/store/authentication/reducer'
import axios from 'axios'

export class ApiError extends Error {
  constructor(errors = {}) {
    super("An error occured")
    this.errors = errors
  }
}

function callApi(config, token) {

  let headers = config.headers || {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  config.headers = headers
  config.baseURL = rapcorApiUrl

  return axios(config).then(response => {
    if (response.status >= 300) {
      throw new ApiError(response.data.errors)
    }
    return response.data
  })
}

export const RAPCOR_API = Symbol('RAPCOR_API')

export default store => next => action => {
  const type = action.type

  if (type !== RAPCOR_API) {
    return next(action)
  }

  let {types: [request, success, failure], config} = action
  let token = getClinicianToken(store.getState())

  store.dispatch({
    type: request
  })

  callApi(config, token).then(response =>
    store.dispatch({
      type: success,
      payload: response
    })
  ).catch(error => 
    store.dispatch({
      type: failure,
      error: error
    })
  )

  return next(action)
}
