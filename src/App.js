import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Pacients from "./pages/Pacients";
import Login from "./pages/Login";
import { useState } from "react";
import ProfilPacijenta from "./pages/ProfilPacijenta";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
function App() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Switch>
      <Route path="/pacients" exact>
        <Pacients
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          active={active}
          setActive={setActive}
        />
      </Route>
      <Route path="/profile/:id" exact>
        <ProfilPacijenta active={active} setActive={setActive} />
      </Route>
      <Route path="/">
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route path="*">
        <ErrorBoundary />
      </Route>
    </Switch>
  );
}

export default App;
