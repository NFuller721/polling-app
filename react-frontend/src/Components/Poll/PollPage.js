// Components
import PollCard from './PollCard'

// React
import React, { useState } from 'react'
// React router
import { withRouter } from 'react-router-dom'

// CSS
import './css/Poll.css'

// Poll Page
class PollPage extends React.Component {

  // Constructor
  constructor(props) {
    super(props)
    this.state = { pollInfo: {} }
  }

  // componentDidMount
  async componentDidMount() {
    const response = await fetch("/Api/467586970086574653/read", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pollId: this.props.match.params.pollId })
    })
    const data = await response.json()

    this.setState({pollInfo: data.Response})
  }

  render() {
    return (
      <PollCard
        pollId={ this.props.match.params.pollId }
        pollInfo={ this.state.pollInfo }/>
    )
  }
}

export default withRouter(PollPage)
