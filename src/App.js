
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import Nav from './components/Menu/Nav';
import Homework from './components/Homework/Homework';
import Game from './components/Game/Game';
import Main from './components/Main/Main';
import Cards_1 from './components/Cards_1/Cards_1';
import Cards_2 from './components/Cards_2/Cards_2';
import Cards_3 from './components/Cards_3/Cards_3';
import Header from './components/Header/Header';



function App() {
  
  return (
    <BrowserRouter>
    <div className="App">

      <Header/>

      <Nav/>

      <Route path="/homework" component={Homework}/>
      <Route path="/game" component={Game}/>
      <Route path="/main" component={Main}/>
      <Route path="/card 1" component={Cards_1}/>
      <Route path="/card 2" component={Cards_2}/>
      <Route path="/card 3" component={Cards_3}/>

    </div>
  </BrowserRouter>
  );
}

export default App;

