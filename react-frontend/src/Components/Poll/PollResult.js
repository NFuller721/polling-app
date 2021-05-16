// React
import React from 'react'
// Material-ui
import { Typography } from '@material-ui/core'

// Poll Result
const PollResult = ({ value, max, label }) => {
  return (
    <div className="PollResult">
      <Typography>{label}</Typography>
      <div className="Progress" style={{width: `${(value / max) * 100}%`}}></div>
    </div>
  )
}

export default PollResult
