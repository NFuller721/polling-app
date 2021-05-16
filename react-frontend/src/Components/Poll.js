import React from 'react'
import { withRouter } from 'react-router-dom'

class Poll extends React.Component {

  async componentDidMount() {
    const url = `/Api/API_KEY/${this.props.match.params.pollId}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
  }
  render() {
    return (
      <p>{ this.props.match.params.pollId }</p>
    )
  }
}

export default withRouter(Poll)
