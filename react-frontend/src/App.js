import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import Poll from './Components/Poll'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <p>Hello There</p>
          </Route>
          <Route exact path="/poll/:pollId">
            <Poll />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
