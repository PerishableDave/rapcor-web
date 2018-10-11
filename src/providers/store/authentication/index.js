import {
  CREATE_PROVIDER_TOKEN_REQUEST,
  CREATE_PROVIDER_TOKEN_SUCCESS,
  CREATE_PROVIDER_TOKEN_FAILURE,
  CLEAR_PROVIDER_TOKEN_ERROR
} from './actions'
import { 
  post,
  ApiUnauthorizedError
} from '../../../lib/rapcor-api'
import history from '../../../store/history'

export class ProviderInvalidLoginError extends Error {
  constructor () {
    super("Invalid email or password.")
    this.name = "ProviderInvalidLoginError"
  }
}

export const login = (dispatch) => {
  return async (email, password) => {
    const payload = {
      contact_email: email,
      password: password
    }

    dispatch({
      type: CREATE_PROVIDER_TOKEN_REQUEST
    })

    try {
      const json = await post('/v1/providers/tokens', payload)

      dispatch({
        type: CREATE_PROVIDER_TOKEN_SUCCESS,
        payload: {
          token: json.token.id
        }
      })

    } catch (error) {
      if (error.name === "ApiUnauthorizedError") {
        dispatch({
          type: CREATE_PROVIDER_TOKEN_FAILURE,
          error: new ProviderInvalidLoginError()
        })
      } else {
        dispatch({
          type: CREATE_PROVIDER_TOKEN_FAILURE,
          error: error
        })
      }
    }
  }
}

export const clearProviderLoginError = (dispatch) => {
  return async () => {
    dispatch({ type: CLEAR_PROVIDER_TOKEN_ERROR })
  }
}
