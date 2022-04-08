import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Pacients from "./pages/Pacients";
function App() {
  return (
    <Switch>
      <Route path="/">
        <Pacients />
      </Route>
      <Route path="/about">
        <div>About</div>
        <div>Test</div>
        <div>Test</div>
      </Route>
    </Switch>
  );
}

export default App;
