import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Pacients from "./pages/Pacients";
import Login from "./pages/Login";
import { useState } from "react";
import ProfilPacijenta from "./pages/ProfilPacijenta";
function App() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Switch>
      <Route path="/pacients">
        <Pacients
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          active={active}
          setActive={setActive}
        />
      </Route>
      <Route path="/profile/:id">
        <ProfilPacijenta active={active} setActive={setActive} />
      </Route>
      <Route path="/">
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
