import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css';
const app = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="Home" component={Home} />
      <Route path="Contact" component={Contact} />
      <Route path="About" component={About} />
    </Route>
  </Router>, app);
