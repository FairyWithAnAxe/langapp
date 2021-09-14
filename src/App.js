
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import Error from './components/Error404/Error';



function App() {
  
  return (
    <BrowserRouter>
    {/* Обычно предпочтительнее использовать <BrowserRouter>, но если ваш сайт расположен на статическом сервере(как github pages), то использовать <HashRouter> это хорошее решение проблемы.  */}
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
          <Route exact path="/main" component={Main}/>
          <Route exact path="/card 1" component={Cards_1}/>
          <Route exact path="/card 2" component={Cards_2}/>
          <Route exact path="/card 3" component={Cards_3}/>
          <Route exact path="/" component={Homework}/>
          <Route component={Error} />
          

        </Switch>

      </main>

    </div>
  </BrowserRouter>
  );
}

export default App;

