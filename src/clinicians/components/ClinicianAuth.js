import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (WrappedComponent) => {
  var wrapper = (props) => {
    if (props.isClinicianAuthenticated) {
      return (<WrappedComponent {...props} />)
    } else {
      return (<h1>404</h1>)
    }
  }
  
  const mapStateToProps = (state) => ({
    isClinicianAuthenticated: state.clinicians.authentication.token
  })

  const mapDispatchToProps = (dispatch) => ({})

  return connect(mapStateToProps, mapDispatchToProps)(wrapper)
}
