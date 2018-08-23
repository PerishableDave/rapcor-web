import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import clinicians from '../clinicians/store/reducer'
import providers from '../providers/store/reducer'
import experiences from './experiences/reducer'

export default combineReducers({
  clinicians,
  providers,
  experiences,
  form
})
