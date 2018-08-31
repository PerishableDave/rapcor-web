import { combineReducers } from 'redux'

import account from './account/reducer'
import authentication from './authentication/reducer'
import requests from './requests/reducer'

export default combineReducers({
  account,
  authentication,
  requests
})
