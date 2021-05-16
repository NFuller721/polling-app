import { Card, CardContent, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ThemeProviderComponent from '../ThemeProviderComponent'

const CreatePollForm = () => {
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

  return (
    <ThemeProviderComponent>
      <Card className={classes.Card}>
        <CardContent className={classes.CardContent}>
          <Button variant="contained">Create Poll</Button>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default CreatePollForm
