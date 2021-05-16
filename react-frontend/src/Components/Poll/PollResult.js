import React from 'react'

const PollResult = ({ value, max, label }) => {
  return (
    <div className="PollResults">
      <label>{label}</label>
      <progress value={value} max={max}></progress>
    </div>
  )
}

export default PollResult
