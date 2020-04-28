import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import history from "./components/history";
import home from './components/home'
import Nav from './components/nav'
import Footer from "./components/footer";

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
