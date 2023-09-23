import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components';

import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <div className="w-full overflow-hidden">
      <div className="">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
  </div>
)

export default App
