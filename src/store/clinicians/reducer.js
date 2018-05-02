import { combineReducers } from 'redux'

import account from './account/reducer'
import authentication from './authentication/reducer'

export default combineReducers({
  account,
  authentication
})
