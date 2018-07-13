import {
  CREATE_PROVIDER_TOKEN_REQUEST,
  CREATE_PROVIDER_TOKEN_SUCCESS,
  CREATE_PROVIDER_TOKEN_FAILURE
} from './actions'
import { post } from '../../../lib/rapcor-api'
import history from '../../../store/history'

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
      dispatch({
        type: CREATE_PROVIDER_TOKEN_FAILURE,
        error: error
      })
    }
  }
}
