import { Card, CardContent, Typography, Button } from '@material-ui/core'
import ThemeProviderComponent from '../ThemeProviderComponent'

const CreatePollForm = () => {
  return (
    <ThemeProviderComponent>
      <Card>
        <CardContent>
          <Button variant="contained">Create Poll</Button>
        </CardContent>
      </Card>
    </ThemeProviderComponent>
  )
}

export default CreatePollForm
