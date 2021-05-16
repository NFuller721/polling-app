import React from 'react'
import PollResult from './PollResult'
import { withRouter } from 'react-router-dom'

class PollResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionACount: 0,
      optionBCount: 0,
      optionCCount: 0,
      optionDCount: 0,
      optionECount: 0,
      All: 0,
    }
  }

  sum(Response) {
    return Response.optionACount + Response.optionBCount + Response.optionCCount + Response.optionDCount + Response.optionECount
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

    this.setState({All: this.sum(Response)})
  }

  render() {
    return (
      <div className="PollResults">
        <PollResult value="1" max={this.state.All} label="Hello There"/>
        <PollResult value="2" max={this.state.All} label="Hello There"/>
        <PollResult value="1" max={this.state.All} label="Hello There"/>
      </div>
    )
  }
}

export default withRouter(PollResults)
