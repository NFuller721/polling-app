import React from 'react'
import {
  Typography
} from '@material-ui/core'

const PollResult = ({ value, max, label }) => {
  return (
    <div className="PollResult">
      <Typography>{label}</Typography>
      <progress value={value} max={max}></progress>
    </div>
  )
}

export default PollResult
