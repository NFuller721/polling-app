import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'

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
      <form>
        { this.state.pollInfo.optionACount == null ? <div></div> : <Checkbox checked={false} />}
        { this.state.pollInfo.optionBCount == null ? <div></div> : <Checkbox checked={false} />}
        { this.state.pollInfo.optionCCount == null ? <div></div> : <Checkbox checked={false} />}
        { this.state.pollInfo.optionDCount == null ? <div></div> : <Checkbox checked={false} />}
        { this.state.pollInfo.optionECount == null ? <div></div> : <Checkbox checked={false} />}
      </form>
    )
  }
}

export default withRouter(Poll)
