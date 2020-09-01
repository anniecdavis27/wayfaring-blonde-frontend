import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './Components/Home'
import Posts from './Components/Posts'
import Contact from './Components/Contact'
import About from './Components/About'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={Posts} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
