import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize:true}) : compose

export default (initialState = {}) => {
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(logger)))
}
