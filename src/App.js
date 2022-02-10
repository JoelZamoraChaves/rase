import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoMatch from './Pages/NoMatch';

class App extends Component {
  render(){
    return (
        <div>
            <Router>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/Acerca' element={<About/>} />
                <Route exact path='/Contactanos' element={<Contact/>} />
                <Route exact path='/NoEncontrado' element={<NoMatch/>} />
              </Routes>
            </Router>
        </div>
      );
  }
}

export default App;
