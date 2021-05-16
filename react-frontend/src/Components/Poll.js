import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

class Poll extends React.Component {

  state = {
    pollInfo: {}
  }

  async componentDidMount() {
    const body = JSON.stringify(
      {
        pollId: this.props.match.params.pollId
      }
    )
    const response = await fetch("/Api/467586970086574653/read", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await response.json()

    this.setState({pollInfo: data.Response})
  }
  render() {
    return (
      <p>{ JSON.stringify(this.state.pollInfo) }</p>
    )
  }
}

export default withRouter(Poll)
