import React, { Component } from 'react'
import './style.css'

export default class Loader extends Component {
  render() {
    const { children, loading } = this.props

		const className = loading ? "loading" : ""

    return (
      <div className={ `loader ${className}` }>
         { children }
      </div>
    )
  }
}
