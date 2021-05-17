// React
import React, { useState } from 'react'
// Material-ui
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Poll Form
const PollForm = ({ pollId, pollInfo, onVote }) => {

  // State
  const defaultPollOptions = {
    optionA: false,
    optionB: false,
    optionC: false,
    optionD: false,
    optionE: false
  }
  const [pollOptions, setPollOptions] = useState(defaultPollOptions)

  // Styles
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

  // Handle Checkboxes
  const checkHandler = (event) => {
    setPollOptions({[event.target.name]: [event.target.checked]})
  }

  // whatOption
  const whatOption = () => {
    if (pollOptions.optionA) {
      return "A"
    } else if (pollOptions.optionB) {
      return "B"
    } else if (pollOptions.optionC) {
      return "C"
    } else if (pollOptions.optionD) {
      return "D"
    } else if (pollOptions.optionE) {
      return "E"
    } else {
      console.warn("No option selected")
      return ""
    }
  }

  // Handle form submit
  const submitHandler = async (event) => {
    // Prevent default submit
    event.preventDefault()

    // whatOption
    const option = whatOption()

    // Return if option is empty
    if (option == "") return

    // Make vote request
    const response = await fetch("/Api/467586970086574653/vote", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pollId, option})
    })
    const data = await response.json()

    // Invert voted
    onVote()
  }

  return (
    <form
      onSubmit={submitHandler}
      className={"PollForm " + classes.Form}>

      { pollInfo.optionACount == null || pollInfo.optionACount == "None" ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionA" onChange={checkHandler} checked={pollOptions.optionA} />}
          label={pollInfo.optionATitle}
          />
      )}
      { pollInfo.optionBCount == null || pollInfo.optionBCount == "None" ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionB" onChange={checkHandler} checked={pollOptions.optionB} />}
          label={pollInfo.optionBTitle}
          />
      )}
      { pollInfo.optionCCount == null || pollInfo.optionCCount == "None" ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionC" onChange={checkHandler} checked={pollOptions.optionC} />}
          label={pollInfo.optionCTitle}
          />
      )}
      { pollInfo.optionDCount == null || pollInfo.optionDCount == "None" ? <div></div> : (
        <FormControlLabel
          control={<Checkbox name="optionD" onChange={checkHandler} checked={pollOptions.optionD} />}
          label={pollInfo.optionDTitle}
          />
      )}
      { pollInfo.optionECount == null || pollInfo.optionECount == "None" ? <div></div> : (
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
