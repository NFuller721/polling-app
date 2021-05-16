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
  const [voted, setVoted] = useState(pollInfo.voted)

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



  return (
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <div clasName="PollTitle">
            <Typography variant="h3">{pollInfo.title}</Typography>
          </div>
          { !voted ? <PollForm pollId={pollId} pollInfo={pollInfo} onVote={onVote} /> : <PollResults />}
        </CardContent>
      </Card>

      <Button onClick={() => setVoted(pollInfo.voted)}></Button>
    </ThemeProviderComponent>
  )
}

export default PollCard
