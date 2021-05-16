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
    console.log(!(this.state.pollInfo.optionACount >= 0))
    console.log(!(this.state.pollInfo.optionBCount >= 0))
    console.log(!(this.state.pollInfo.optionCCount >= 0))
    console.log(!(this.state.pollInfo.optionDCount >= 0))
    console.log(!(this.state.pollInfo.optionECount >= 0))
  }
  render() {
    return (
      <form>
        { !(this.state.pollInfo.optionACount >= 0) ? <div></div> : <Checkbox checked={false} />}
        { !(this.state.pollInfo.optionBCount >= 0) ? <div></div> : <Checkbox checked={false} />}
        { !(this.state.pollInfo.optionCCount >= 0) ? <div></div> : <Checkbox checked={false} />}
        { !(this.state.pollInfo.optionDCount >= 0) ? <div></div> : <Checkbox checked={false} />}
        { !(this.state.pollInfo.optionECount >= 0) ? <div></div> : <Checkbox checked={false} />}
      </form>
    )
  }
}

export default withRouter(Poll)
