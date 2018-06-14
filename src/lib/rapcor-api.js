import { rapcorApiUrl } from '../config'
import axios from 'axios'

export class ApiError extends Error {
  constructor(errors = {}) {
    super("An error occured")
    this.errors = errors
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

