import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={ Home } exact ></Route>
      <Route path="/Home" component={ Home } exact ></Route>
      <Route path="/articles" component={ Articles } exact ></Route>
      <Route path="/about" component={ About } exact ></Route>
      <Route path="/contact" component={ Contact } exact ></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);