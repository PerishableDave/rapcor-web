import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import './style.css'

export default class PhotoField extends Component {
  constructor(props) {
    super(props)

    this.handleDrop = this.handleDrop.bind(this)
    this.updateThumbnail = this.updateThumbnail.bind(this)

    this.state = {
      thumbnail: null
    }
  }

  handleDrop(files) {
    const file = files[0]

    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = ((event) => {
        const src = event.target.result
        this.updateThumbnail(src)
      })
      reader.readAsDataURL(file)
    }

    this.props.onDrop(file)
  }

  updateThumbnail(src) {
    this.setState({
      thumbnail: src
    })
  }

  render() {
    const thumbnail = this.state.thumbnail || this.props.thumbnail
    const thumbnailElem = thumbnail ? (
      <div className="photo-field-thumbnail">
        <img src={thumbnail} className="align-middle" />
      </div>
    ) : undefined

    return (
      <div className="photo-field">
        { thumbnailElem }

        <Dropzone
          className="file-dropzone btn btn-primary"
          onDrop={this.handleDrop}>
          <i className="fas fa-camera fa-lg align-top"></i> {this.props.label}
        </Dropzone>
      </div>
    )
  }
}
