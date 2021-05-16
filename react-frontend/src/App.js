import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import PollPage from './Components/Poll/PollPage'

function App() {
  return (
    <Router>
      <div className="App" style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px"
      }}>
        <Switch>
          <Route exact path="/">
            <p>Hello There</p>
          </Route>
          <Route exact path="/poll/:pollId">
            <PollPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
