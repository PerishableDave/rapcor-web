import { rapcorApiUrl } from '../config'

export class ApiError extends Error {
  constructor(errors = {}) {
    super("An error occured")
    this.errors = errors
  }
}

const defaultHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}

const request = (path, method, body, token) => {
  const url = rapcorApiUrl + path
  var headers = defaultHeaders
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: body
  }).then((response) => {
    if (response.status >= 300) {
      return response.json().then((json) => {
        throw new ApiError(json.errors)
      })
    }
    return response.json()
  })
}

export const get = (path, token = null) => {
  return request(path, 'GET', null, token)
}

export const post = (path, payload, token = null) => {
  const body = JSON.stringify(payload)
  return request(path, 'POST', body, token)
}

export const put = (path, payload, token = null) => {
  const body = JSON.stringify(payload)
  return request(path, 'PUT', body, token)
}

export const del = (path, payload, token = null) => {
  return request(path, 'DELETE', null, token)
}
