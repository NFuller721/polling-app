import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card, CardContent,
  Typography,
  useMediaQuery,
  Button
} from '@material-ui/core'

import ThemeProviderComponent from '../ThemeProviderComponent'
import PollForm from './PollForm'
import PollResults from './PollResults'

const PollCard = ({ pollId, pollInfo }) => {
  const [voted, setVoted] = useState(null)

  const useStyles = makeStyles({
    Card: {
      height: "450px",
      width: "375px"
    },
    CardContent: {
      boxSizing: "border-box",
      height: "calc(100% - 16px)"
    }
  })
  const classes = useStyles()

  const onVote = () => {
    setVoted(!voted)
  }

  const onLoad = async () => {
    const body = JSON.stringify(
      {
        pollId
      }
    )
    const response = await fetch("/Api/467586970086574653/read", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await response.json()

    setVoted(data.Response.voted)
  }


  return (
    <ThemeProviderComponent onLoad={onLoad()}>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <div clasName="PollTitle">
            <Typography variant="h3">{pollInfo.title}</Typography>
          </div>
          { !voted ? <PollForm pollId={pollId} pollInfo={pollInfo} onVote={onVote} /> : <PollResults />}
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default PollCard
