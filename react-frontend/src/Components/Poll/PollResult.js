import React from 'react'

const PollResult = ({ value, max }) => {
  return (
    <div>
      <progress value={value} max={max}></progress>
    </div>
  )
}

export default PollResult
