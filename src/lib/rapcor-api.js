import { rapcorApiUrl } from '../config'
import axios from 'axios'

export class ApiUnauthorizedError extends Error {
  constructor() {
    super("Unauthorized request")
    this.name = "ApiUnauthorizedError"
  }
}

const request = (path, method, data, token) => {
  const url = rapcorApiUrl + path

  let headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return axios({
    url,
    headers,
    method,
    data
  }).then(response => {
    return response.data
  }).catch((err) => {
    if (err.response.status === 401) {
      throw new ApiUnauthorizedError()
    }

    throw err
  })
}

export const get = (path, token = null) => {
  return request(path, 'get', null, token)
}

export const post = (path, payload, token = null) => {
  return request(path, 'post', payload, token)
}

export const put = (path, payload, token = null) => {
  return request(path, 'put', payload, token)
}

export const del = (path, token = null) => {
  return request(path, 'delete', null, token)
}

