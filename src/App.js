import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Catering from './Components/Catering';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import TopBar from './Components/TopBar';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Directions from './Components/Directions';
import Press from './Components/Press';

document.body.classList.add('body-background');


class App extends Component {


  render() {
    return (

      <div className="App">
      <TopBar />
      <Navigation />
      <div className="header-title">
      <h1>ChouPli</h1>
      <h2>Wood-fired Kabob</h2>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/catering" component={Catering} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/directions" component={Directions} />
      <Route path="/press" component={Press} />
      <Route path="/menu" component={Menu} />

      <About />
      <Catering />
      <Contact />
      <Directions />
      <Press />
      <Menu />
      </div>
    );
  }
}

export default App;
