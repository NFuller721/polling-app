// Components
import ThemeProviderComponent from '../ThemeProviderComponent'

// React
import React, { useState } from 'react'
// Material-ui
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// CreatePollForm
const CreatePollForm = () => {
  // State
  const defaultOptions = {
    Title: "",
    OptionA: "",
    OptionB: "",
    OptionC: "",
    OptionD: "",
    OptionE: ""
  }
  const [options, setOptions] = useState(defaultOptions)

  // Styles
  const useStyles = makeStyles({
    Card: {
      height: "450px",
      width: "375px"
    },
    CardContent: {
      boxSizing: "border-box",
      height: "calc(100% - 16px)"
    },
    Form: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% + 24px)"
    },
    Grow: {
      flexGrow: 1
    },
    Button: {
      justifySelf: "flex-end"
    }
  })
  const classes = useStyles()

  // Change Handler
  const changeHandler = (event) => {
    setOptions(prevOptions => {
      return { ...prevOptions, [event.target.name]: event.target.value }
    })
  }

  // Submit Handler
  const submitHandler = async (event) => {
    event.preventDefault()

    const Body = {}

    for (const Value in options) {
      if (Value == "Title") {Body.title = options[Value]}
      else if (Value == "OptionA") {Body.optionATitle = options[Value].length ? options[Value] : null}
      else if (Value == "OptionB") {Body.optionBTitle = options[Value].length ? options[Value] : null}
      else if (Value == "OptionC") {Body.optionCTitle = options[Value].length ? options[Value] : null}
      else if (Value == "OptionD") {Body.optionDTitle = options[Value].length ? options[Value] : null}
      else if (Value == "OptionE") {Body.optionETitle = options[Value].length ? options[Value] : null}
      else {}
    }

    const response = await fetch("/Api/467586970086574653/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Body)
    })
    const data = await response.json()

    window.location.replace(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)

    setOptions(defaultOptions)
  }

  return (
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <form onSubmit={submitHandler} className={classes.Form}>
            <TextField
              name="Title"
              placeholder="Title"
              label="Poll title"
              value={options.Title}
              onChange={changeHandler}/>

            <TextField
              name="OptionA"
              placeholder="Option 1"
              label="Leave blank to exclude"
              value={options.OptionA}
              onChange={changeHandler}/>
            <TextField
              name="OptionB"
              placeholder="Option 2"
              label="Leave blank to exclude"
              value={options.OptionB}
              onChange={changeHandler}/>
            <TextField
              name="OptionC"
              placeholder="Option 3"
              label="Leave blank to exclude"
              value={options.OptionC}
              onChange={changeHandler}/>
            <TextField
              name="OptionD"
              placeholder="Option 4"
              label="Leave blank to exclude"
              value={options.OptionD}
              onChange={changeHandler}/>
            <TextField
              name="OptionE"
              placeholder="Option 5"
              label="Leave blank to exclude"
              value={options.OptionE}
              onChange={changeHandler}/>

            <div className={classes.Grow}></div>

            <Button type="submit" variant="contained" className={classes.Button}>Create Poll</Button>
          </form>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default CreatePollForm
