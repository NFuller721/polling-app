import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'

class Poll extends React.Component {

  state = {
    pollInfo: {}
    pollOptions: {
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
      optionE: false
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

  checkHandler(event) {
    console.log(event)
  }

  render() {
    return (
      <form>
        { this.state.pollInfo.optionACount == null ? <div></div> : <Checkbox name="optionA" onChange={this.checkHandler} checked={this.state.pollOptions.optionA} />}
        { this.state.pollInfo.optionBCount == null ? <div></div> : <Checkbox name="optionB" onChange={this.checkHandler} checked={this.state.pollOptions.optionB} />}
        { this.state.pollInfo.optionCCount == null ? <div></div> : <Checkbox name="optionC" onChange={this.checkHandler} checked={this.state.pollOptions.optionC} />}
        { this.state.pollInfo.optionDCount == null ? <div></div> : <Checkbox name="optionD" onChange={this.checkHandler} checked={this.state.pollOptions.optionD} />}
        { this.state.pollInfo.optionECount == null ? <div></div> : <Checkbox name="optionE" onChange={this.checkHandler} checked={this.state.pollOptions.optionE} />}
      </form>
    )
  }
}

export default withRouter(Poll)
