import {
  CREATE_PROVIDER_REQUEST,
  CREATE_PROVIDER_SUCCESS,
  CREATE_PROVIDER_FAILURE
} from './actions'
import { post } from '../../../lib/rapcor-api'
import { serializePhone, deserializePhone } from '../../../lib/serializer-helpers'

const serialize = (provider) => {
  return {
    administrative_area: provider.administrativeArea,
    contact_email: provider.contactEmail,
    contact_number: serializePhone(provider.contactNumber),
    locality: provider.locality,
    name: provider.name,
    password: provider.password,
    password_confirmation: provider.passwordConfirmation,
    postal_code: provider.postalCode,
    premise: provider.premise,
    thoroughfare: provider.thoroughfare,
    country: 'US'
  }
}

const deserialize = (json) => {
  return {
    administrativeArea: json.administrative_area,
    contactEmail: json.contact_email,
    contactNumber: deserializePhone(json.contact_number),
    locality: json.locality,
    name: json.name,
    postalCode: json.postalCode,
    premise: json.premise,
    thoroughfare: json.thoroughfare,
    country: json.country
  }
}

export const createProvider = (dispatch) => {
  return async (provider) => {
    dispatch({ type: CREATE_PROVIDER_REQUEST })

    const payload = {
      provider: serialize(provider)
    }

    try {
      const json = await post('/v1/providers', payload)
      const provider = deserialize(json.provider)

      dispatch({
        type: CREATE_PROVIDER_SUCCESS,
        payload: provider
      })
    } catch (error) {
      dispatch({
        type: CREATE_PROVIDER_FAILURE,
        error: error
      })
    }
  }
}
