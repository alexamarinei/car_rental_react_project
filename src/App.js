import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'normalize.css';
import Navbar from './components/layout/Navbar';



function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <div className='content'>
      </div>
    </div>
    </Router>
  )
}

export default App;