import { combineReducers } from 'redux'

import account from './account/reducer'
import authentication from './authentication/reducer'
import clinicianExperiences from './clinicianExperiences/reducer'
import documents from './documents/reducer'
import requests from './requests/reducer'

export default combineReducers({
  account,
  authentication,
  clinicianExperiences,
  documents,
  requests
})
