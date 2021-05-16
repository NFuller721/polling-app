import React from 'react'
import PollResult from './PollResult'

const PollResults = () => {
  return (
    <div className="Poll Results">
      <PollResult value="1" max="4"/>
      <PollResult value="2" max="4"/>
      <PollResult value="1" max="4"/>
    </div>
  )
}

export default PollResults
