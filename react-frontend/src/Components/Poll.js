import React from 'react'
import { withRouter } from 'react-router-dom'

class Poll extends React.Component {

  async componentDidMount() {
    const PollInfo = {"pollId": this.props.match.params.pollId}
    const url = `/Api/467586970086574653/read`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify()
    })
    const data = await response.json(PollInfo)

    console.log(data)
  }
  render() {
    return (
      <p>{ this.props.match.params.pollId }</p>
    )
  }
}

export default withRouter(Poll)
