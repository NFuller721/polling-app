// Components
import PollPage from './Components/Poll/PollPage'
import CreatePollPage from './Components/CreatePoll/CreatePollPage'

// React router
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

// App
function App() {
  const rootStyles = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px"
  }

  return (
    <Router>

      <div className="App" style={ rootStyles }>

        <Switch>
          <Route exact path="/">
            <p>Hello There</p>
          </Route>

          <Route exact path="/poll/:pollId">
            <PollPage />
          </Route>

          <Route exact path="/create-poll">
            <CreatePollPage />
          </Route>
          
        </Switch>
      </div>

    </Router>
  );
}

export default App;
