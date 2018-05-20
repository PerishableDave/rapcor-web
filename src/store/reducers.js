import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import clinicians from '../clinicians/store/reducer'

export default combineReducers({
  clinicians,
  form
})
