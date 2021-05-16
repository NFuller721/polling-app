import React from 'react'
import PollResult from './PollResult'

const PollResults = () => {
  return (
    <div className="PollResult">
      <PollResult value="1" max="4" label="Hello There"/>
      <PollResult value="2" max="4" label="Hello There"/>
      <PollResult value="1" max="4" label="Hello There"/>
    </div>
  )
}

export default PollResults
