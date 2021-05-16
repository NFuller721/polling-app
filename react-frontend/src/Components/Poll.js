import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@material-ui/core'

class Poll extends React.Component {
  state = {
    pollInfo: {},
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

  checkHandler = (event) => {
    this.setState({pollOptions: {[event.target.name]: [event.target.checked]}})
  }

  render() {
    return (
      <form>
        { this.state.pollInfo.optionACount == null ? <div></div> : (
          <FormControlLabel
            control={<Checkbox name="optionA" onChange={this.checkHandler} checked={this.state.pollOptions.optionA} />}
            label={this.state.pollInfo.optionATitle}
          />
        )}
        { this.state.pollInfo.optionBCount == null ? <div></div> : (
          <FormControlLabel
            control={<Checkbox name="optionB" onChange={this.checkHandler} checked={this.state.pollOptions.optionB} />}
            label={this.state.pollInfo.optionBTitle}
          />
        )}
        { this.state.pollInfo.optionCCount == null ? <div></div> : (
          <FormControlLabel
            control={<Checkbox name="optionC" onChange={this.checkHandler} checked={this.state.pollOptions.optionC} />}
            label={this.state.pollInfo.optionCTitle}
          />
        )}
        { this.state.pollInfo.optionDCount == null ? <div></div> : (
          <FormControlLabel
            control={<Checkbox name="optionD" onChange={this.checkHandler} checked={this.state.pollOptions.optionD} />}
            label={this.state.pollInfo.optionDTitle}
          />
        )}
        { this.state.pollInfo.optionECount == null ? <div></div> : (
          <FormControlLabel
            control={<Checkbox name="optionE" onChange={this.checkHandler} checked={this.state.pollOptions.optionE} />}
            label={this.state.pollInfo.optionETitle}
          />
        )}
      </form>
    )
  }
}

export default withRouter(Poll)
