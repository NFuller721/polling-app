import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './css/CreatePoll.css'

import CreatePollForm from './CreatePollForm'

class CreatePollPage extends React.Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <CreatePollForm />
    )
  }
}

export default withRouter(CreatePollPage)
