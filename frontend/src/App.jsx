import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Navbar } from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <Navbar />
  </div>
)

export default App
