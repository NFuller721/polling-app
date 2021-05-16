import React from 'react'
import PollResult from './PollResult'
import { withRouter } from 'react-router-dom'

class PollResults extends React.Component {
  constructor(props) {
    super(props)
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

    console.log(data)
  }

  render() {
    return (
      <div className="PollResults">
        <PollResult value="1" max="4" label="Hello There"/>
        <PollResult value="2" max="4" label="Hello There"/>
        <PollResult value="1" max="4" label="Hello There"/>
      </div>
    )
  }
}

export default withRouter(PollResults)
