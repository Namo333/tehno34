import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { Home, About } from '../pages';

const Navbar = () => (
  <header>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
               <Link to="/">Домой</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
             </li>
           </ul>
         </nav>

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         </Routes>
       </div>
     </Router>
  </header>
)

export default Navbar