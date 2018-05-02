import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

export default (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize: true}) || compose
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(logger)))
}
