import React from 'react'

const PollResult = ({ value, max, label }) => {
  return (
    <div>
      <label>{label}</label>
      <progress value={value} max={max}></progress>
    </div>
  )
}

export default PollResult
