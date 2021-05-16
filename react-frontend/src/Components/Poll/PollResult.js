import React from 'react'
import {
  Typography
} from '@material-ui/core'

const PollResult = ({ value, max, label }) => {
  return (
    <div className="PollResult">
      <Typography>{label}</Typography>
      <div className="Progress" style={{width: value / max}}></div>
    </div>
  )
}

export default PollResult
