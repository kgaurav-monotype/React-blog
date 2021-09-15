import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/post/:postId">
            <Single />
        </Route>
        <Route path="/write">
            <Write />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
