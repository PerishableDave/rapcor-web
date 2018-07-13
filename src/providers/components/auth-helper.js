import React from 'react'
import { connect } from 'react-redux'

import { getProviderToken } from '../store/authentication/reducer'

export default WrappedComponent => {
  var wrapper = (props) => {
    if (props.isProviderAuth) {
      return (<WrappedComponent {...props} />)
    } else {
      return (<h1>404</h1>)
    }
  }

  const mapStateToProps = (state) => ({
    isProviderAuth: getProviderToken(state)
  })

  const mapDispatchToProps = dispatch => {}

  return connect(mapStateToProps, mapDispatchToProps)(wrapper)
}


