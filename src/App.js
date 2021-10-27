import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Menu/Nav';
import Homework from './components/Homework/Homework';
import Game from './components/Game/Game';
import Main from './components/Main/Main';
import Cards_1 from './components/Cards_1/Cards_1';
import Cards_2 from './components/Cards_2/Cards_2';
// import Cards_3 from './components/Cards_3/Cards_3';
import Error404 from './components/Errors/Error404';



function App() {  
  return (
    <BrowserRouter>
    <div className="App">
        <header>
          <Header/>
        </header>
        <nav>
          <Nav/>
        </nav>
      <main>
        <Switch>          
          <Route exact path="/game" component={Game}/>
          <Route exact path="/" component={Main}/>
          <Route exact path="/card 1" component={Cards_1}/>
          <Route exact path="/card 2" component={Cards_2}/>
          {/* <Route exact path="/card 3" component={Cards_3}/> */}
          <Route exact path="/homework" component={Homework}/>
          <Route component={Error404} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;

