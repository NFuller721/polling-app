import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControlLabel,
  Checkbox, Button,
  Card, CardContent,
  Typography,
  useMediaQuery
} from '@material-ui/core'

import ThemeProviderComponent from './ThemeProviderComponent'

const PollCard = ({ pollInfo }) => {

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
    Card: {
      height: "450px",
      width: "375px"
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
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent>
          <div clasName="PollTitle">
            <Typography>{pollInfo.title}</Typography>
          </div>
          <form onSubmit={submitHandler} className="Poll">
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
            <Button variant="contained" type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default PollCard
