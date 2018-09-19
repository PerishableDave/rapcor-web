import React, { Component } from 'react'
import { googleMapsKey } from '../../../config'

import './style.css'

export default class Map extends Component {
  render() {
    const { destination } = this.props

    if (!destination) {
      return (<div className="map"></div>)
    }

    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}
    &q=${encodeURIComponent(destination)}`

    return (
      <div className="map">
        <iframe src={mapUrl} />
      </div>
    )
  }
}
