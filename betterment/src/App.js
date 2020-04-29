import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import home from './components/home';
import Nav from './components/nav';
import Footer from "./components/footer";
import Register from './components/register';
import Login from "./components/login";
import Skills from "./components/skills"

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/skills" component={Skills} />

      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
