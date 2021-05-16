import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControlLabel,
  Checkbox, Button,
  Card, CardContent,
  Typography,
  useMediaQuery
} from '@material-ui/core'

const PollForm = ({ pollId, pollInfo }) => {

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
      flexDirection: "column",
      height: "calc(100% - 32px)"
    },
    Grow: {
      flexGrow: 1
    },
    Button: {
      justifySelf: "flex-end"
    }
  })
  const classes = useStyles()

  const checkHandler = (event) => {
    setPollOptions({[event.target.name]: [event.target.checked]})
  }

  const submitHandler = async (event) => {
    event.preventDefault()

    let option = ""

    if (pollOptions.optionA) {
      option = "A"
    } else if (pollOptions.optionB) {
      option = "B"
    } else if (pollOptions.optionC) {
      option = "C"
    } else if (pollOptions.optionD) {
      option = "D"
    } else if (pollOptions.optionE) {
      option = "E"
    } else {
      console.warn("No option selected")
      return ""
    }

    const body = JSON.stringify(
      {
        pollId,
        option
      }
    )
    const response = await fetch("/Api/467586970086574653/vote", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await response.json()

    setPollOptions({
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
      optionE: false
    })
  }

  return (
    <form onSubmit={submitHandler} className={"PollForm " + classes.Form}>
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
      <div className={classes.Grow}></div>
      <Button className={classes.Button} variant="contained" type="submit">Vote</Button>
    </form>
  )
}

export default PollForm
