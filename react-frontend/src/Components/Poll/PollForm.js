import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControlLabel,
  Checkbox, Button,
  Card, CardContent,
  Typography,
  useMediaQuery
} from '@material-ui/core'

const PollForm = ({ pollInfo }) => {

  const [pollOptions, setPollOptions] = useState(
    {
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
      optionE: false
    }
  )

  const useStyles = makeStyles({
    Form: {
      display: "flex",
      flexDirection: "column"
    },
    Grow: {
      flexGrow: 1
    }
  })
  const classes = useStyles()

  const checkHandler = (event) => {
    setPollOptions({[event.target.name]: [event.target.checked]})
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      { pollInfo.optionACount == null ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionA" onChange={checkHandler} checked={pollOptions.optionA} />}
          label={pollInfo.optionATitle}
          />
      )}
      { pollInfo.optionBCount == null ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionB" onChange={checkHandler} checked={pollOptions.optionB} />}
          label={pollInfo.optionBTitle}
          />
      )}
      { pollInfo.optionCCount == null ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionC" onChange={checkHandler} checked={pollOptions.optionC} />}
          label={pollInfo.optionCTitle}
          />
      )}
      { pollInfo.optionDCount == null ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionD" onChange={checkHandler} checked={pollOptions.optionD} />}
          label={pollInfo.optionDTitle}
          />
      )}
      { pollInfo.optionECount == null ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionE" onChange={checkHandler} checked={pollOptions.optionE} />}
          label={pollInfo.optionETitle}
          />
      )}
      <div clasName={classes.Grow}></div>
      <Button variant="contained" type="submit">Vote</Button>
    </form>
  )
}

export default PollForm
