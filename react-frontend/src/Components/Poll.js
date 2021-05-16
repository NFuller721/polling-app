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

    console.log(this.state.pollInfo.optionACount == 0 ? "Does exist" : "Doesn't exist")
    console.log(this.state.pollInfo.optionACount)
    console.log(this.state.pollInfo.optionECount ? "Does exist" : "Doesn't exist")
    console.log(this.state.pollInfo.optionECount)
  }
  render() {
    return (
      <form>
        { !this.state.pollInfo.optionACount ? <div></div> : <Checkbox checked={false} />}
        { !this.state.pollInfo.optionBCount ? <div></div> : <Checkbox checked={false} />}
        { !this.state.pollInfo.optionCCount ? <div></div> : <Checkbox checked={false} />}
        { !this.state.pollInfo.optionDCount ? <div></div> : <Checkbox checked={false} />}
        { !this.state.pollInfo.optionECount ? <div></div> : <Checkbox checked={false} />}
      </form>
    )
  }
}

export default withRouter(Poll)
