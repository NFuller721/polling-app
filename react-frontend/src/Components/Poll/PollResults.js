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
      optionATitle: "",
      optionBTitle: "",
      optionCTitle: "",
      optionDTitle: "",
      optionETitle: "",
      All: 0,
    }
  }

  setAll(Response) {

    let All = 0
    All += Response.optionACount != null ? Response.optionACount : 0
    All += Response.optionBCount != null ? Response.optionBCount : 0
    All += Response.optionCCount != null ? Response.optionCCount : 0
    All += Response.optionDCount != null ? Response.optionDCount : 0
    All += Response.optionDCount != null ? Response.optionDCount : 0



    this.setState(
      {
        optionACount: Response.optionACount,
        optionBCount: Response.optionBCount,
        optionCCount: Response.optionCCount,
        optionDCount: Response.optionDCount,
        optionECount: Response.optionECount,
        optionATitle: Response.optionATitle,
        optionBTitle: Response.optionBTitle,
        optionCTitle: Response.optionCTitle,
        optionDTitle: Response.optionDTitle,
        optionETitle: Response.optionETitle,
        All
      }
    )
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

    this.setAll(data.Response)
  }

  render() {
    return (
      <div className="PollResults">
        { this.state.optionACount != null ? <PollResult value={this.state.optionACount} max={this.state.All} label={this.state.optionATitle}/> : <></>}
        { this.state.optionBCount != null ? <PollResult value={this.state.optionBCount} max={this.state.All} label={this.state.optionBTitle}/> : <></>}
        { this.state.optionCCount != null ? <PollResult value={this.state.optionCCount} max={this.state.All} label={this.state.optionCTitle}/> : <></>}
        { this.state.optionDCount != null ? <PollResult value={this.state.optionDCount} max={this.state.All} label={this.state.optionDTitle}/> : <></>}
        { this.state.optionECount != null ? <PollResult value={this.state.optionECount} max={this.state.All} label={this.state.optionETitle}/> : <></>}
      </div>
    )
  }
}

export default withRouter(PollResults)
