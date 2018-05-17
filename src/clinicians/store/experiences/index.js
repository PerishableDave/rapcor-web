import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE
} from './actions'
import { get } from '../../../lib/rapcor-api'

export const fetchExperiences = async (dispatch) => {
  dispatch({ type: FETCH_EXPERIENCES_REQUEST })

  try {
    const json = await get('/v1/experiences')

    dispatch({
      type: FETCH_EXPERIENCES_SUCCESS,
      payload: json.experiences
    }) 
  } catch (error) {
    dispatch({
      type: FETCH_EXPERIENCES_FAILURE,
      error: error
    })
  }
}
