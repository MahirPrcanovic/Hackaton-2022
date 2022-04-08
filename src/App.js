import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <div>Mahir</div>
      </Route>
      <Route path="/about">
        <div>About</div>
      </Route>
    </Switch>
  );
}

export default App;
