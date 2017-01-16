import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import About from './About';
import Contact from './Contact';
import './index.css';
const app = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* <IndexRoute component={App}></IndexRoute> */}
      <Route path="contact" component={Contact} />
      <Route path="About" component={About} />
    </Route>
  </Router>, app);
