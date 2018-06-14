import { combineReducers } from 'redux'

import account from './account/reducer'
import authentication from './authentication/reducer'
import experiences from './experiences/reducer'
import clinicianExperiences from './clinicianExperiences/reducer'
import documents from './documents/reducer'

export default combineReducers({
  account,
  authentication,
  experiences,
  clinicianExperiences,
  documents
})
