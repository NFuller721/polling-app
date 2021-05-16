import { makeStyles } from '@material-ui/core/styles'
import {
  Card, CardContent,
  Typography,
  useMediaQuery
} from '@material-ui/core'

import ThemeProviderComponent from '../ThemeProviderComponent'
import PollForm from './PollForm'

const PollCard = ({ pollId, pollInfo }) => {

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

  return (
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <div clasName="PollTitle">
            <Typography variant="h3">{pollInfo.title}</Typography>
          </div>
          <PollForm pollId={pollId} pollInfo={pollInfo}/>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default PollCard
