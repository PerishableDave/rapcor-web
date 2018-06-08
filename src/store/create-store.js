import { createStore, applyMiddleware, compose } from 'redux'
import throttle from 'lodash/throttle'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { saveSession, loadSession } from './persistance'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize:true}) : compose

export default (initialState = {}) => {
  const store = createStore(reducers, {...loadSession(), ...initialState}, composeEnhancers(applyMiddleware(logger, thunk)))

  store.subscribe(throttle(() => {
    saveSession(store.getState())
  }, 1000))

  return store
}
