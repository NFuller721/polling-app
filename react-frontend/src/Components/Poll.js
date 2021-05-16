import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import PollCard from './PollCard'

class Poll extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pollInfo: {}
    }
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

  setPollInfo = (info) => {
    this.setState({pollInfo: info})
  }

  render() {
    return (
      <PollCard pollInfo={this.state.pollInfo}/>
    )
  }
}

export default withRouter(Poll)
