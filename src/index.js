import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/articles" component={ Articles } exact />
          <Route path="/about" component={ About } exact />
          <Route path="/contact" component={ Contact } exact />
          <Route component={ PageNotFound } />
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
