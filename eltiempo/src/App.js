import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Inicio from './pages/inicio';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CiudadState from './contex/ciudad/CiudadState';


function App() {
  return (
    <CiudadState>
    <Router>
      <Header/>
      <Nav/>
       <Switch>
           <Route exact path = "/" component = {Inicio}/>

       </Switch>
       <Footer/>
    </Router>
    </CiudadState>
  );
}

export default App;
