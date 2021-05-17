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
  const [options, setOptions] = useState({ Title: "", OptionA: "", OptionB: "", OptionC: "", OptionD: "", OptionE: ""})

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
    setOptions({[event.target.name]: [event.target.value]})
  }

  // Submit Handler
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(options.Title)
  }

  return (
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <form onSubmit={submitHandler} className={classes.Form}>
            <TextField
              name="Title"
              placeholder="Title"
              value={options.Title}
              onChange={changeHandler}/>

            <TextField
              name="OptionA"
              placeholder="Option 1"
              value={options.OptionA}
              onChange={changeHandler}/>
            <TextField
              name="OptionB"
              placeholder="Option 2"
              value={options.OptionB}
              onChange={changeHandler}/>
            <TextField
              name="OptionC"
              placeholder="Option 3"
              value={options.OptionC}
              onChange={changeHandler}/>
            <TextField
              name="OptionD"
              placeholder="Option 4"
              value={options.OptionD}
              onChange={changeHandler}/>
            <TextField
              name="OptionE"
              placeholder="Option 5"
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
