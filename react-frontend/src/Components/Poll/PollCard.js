// Components
import ThemeProviderComponent from '../ThemeProviderComponent'
import PollForm from './PollForm'
import PollResults from './PollResults'

// React
import React, { useState } from 'react'
// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, useMediaQuery } from '@material-ui/core'

// Poll Card
const PollCard = ({ pollId, pollInfo }) => {
  // State
  const [voted, setVoted] = useState(null)

  // Styles
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

  // componentDidMount
  const componentDidMount = async () => {
    const response = await fetch("/Api/467586970086574653/read", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pollId })
    })
    const data = await response.json()

    setVoted(data.Response.voted)
    console.log(voted)
    console.log(data.Response.voted)
  }


  return (
    <ThemeProviderComponent onLoad={componentDidMount()}>

      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>

          <div clasName="PollTitle">
            <Typography
              variant="h3">
              {pollInfo.title}
            </Typography>
          </div>

          { !voted ? (
            <PollForm pollId={pollId} pollInfo={pollInfo} onVote={() => setVoted(!voted)} />
          ) : (
            <PollResults />
          )}

        </CardContent>
      </Card>

    </ThemeProviderComponent>
  )
}

export default PollCard
