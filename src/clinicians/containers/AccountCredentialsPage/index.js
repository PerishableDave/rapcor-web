import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import RespiratoryCredentialForm from '../../components/RespiratoryCredentialForm'
import { fetchDocuments, createOrUpdateDocuments } from '../../store/documents'
import { getDocumentBySlug } from '../../store/documents/reducer'

class AccountCredentialsPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchDocuments())
  }

  handleSubmit(docs) {
    this.props.dispatch(createOrUpdateDocuments(Object.values(docs)))
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <RespiratoryCredentialForm 
              onSubmit={this.handleSubmit}
              initialValues={this.props.documents} documents={this.props.documents} />
          </div>
        </div>
      </div>
    )
  }
}

const buildClinicianDocuments = (docs) => {
  const rcp = getDocumentBySlug(docs, "rt-rcp") || {
    slug: "rt-rcp"
  }

  const crt = getDocumentBySlug(docs, "rt-crt")
  const rrt = getDocumentBySlug(docs, "rt-rrt")

  var rcc = null
  if (crt) {
    rcc = crt
  } else {
    rcc = rrt
  }

  return {
    "rt-rcp": rcp,
    "rt-rcc": rcc
  }
}

const mapStateToProps = (state) => ({
  documents: buildClinicianDocuments(state.clinicians.documents)
})

export default connect(mapStateToProps)(AccountCredentialsPage)
