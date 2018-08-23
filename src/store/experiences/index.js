import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE
} from './actions'
import { get } from '../../lib/rapcor-api'

const deserialize = (json) => {
  return {
    id: json.id,
    description: json.description
  }
}

export const fetchExperiences = (dispatch) => {
  return async () => {
    dispatch({ type: FETCH_EXPERIENCES_REQUEST })

    try {
      const json = await get('/v1/experiences')
      const experiences = json.experiences.map(json => deserialize(json))

      dispatch({
        type: FETCH_EXPERIENCES_SUCCESS,
        payload: experiences
      }) 
    } catch (error) {
      dispatch({
        type: FETCH_EXPERIENCES_FAILURE,
        error: error
      })
    }
  }
}
