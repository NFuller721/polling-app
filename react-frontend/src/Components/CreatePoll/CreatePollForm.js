// Components
import ThemeProviderComponent from '../ThemeProviderComponent'

// Material-ui
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// CreatePollForm
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
          <form>
            <TextField label="Poll title" />

            <TextField label="Leave blank to not include" placeholder="Option 1"/>
            <TextField label="Leave blank to not include" placeholder="Option 2"/>
            <TextField label="Leave blank to not include" placeholder="Option 3"/>
            <TextField label="Leave blank to not include" placeholder="Option 4"/>
            <TextField label="Leave blank to not include" placeholder="Option 5"/>

            <Button variant="contained">Create Poll</Button>
          </form>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default CreatePollForm
