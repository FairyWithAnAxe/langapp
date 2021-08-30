
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import Card_2 from './components/Card_2';
import Design_1 from './components/Design_1';
import Design_2 from './components/Design_2';
import Fire from './components/Fire';
import Flashcard from './components/Flashcard';
import Header from './components/Header';
import Li from './components/Li';
import List from './components/List';
import TestButton from './components/TestButton';
import wordsAPI from './components/wordsAPI.json'
import TestCard from './components/TestCard';
import Card_Cart from './components/Card_Cart';
import Table from './components/Table';
import './components/Table.css'
import NeonBtn from './components/NeonBtn';
import CardFlip from './components/CardFlip';
// import Words from './components/Words';
// game
//import React, {useState} from 'react'
//import Board from './components/Board/Board'
import backImg from './assets/images/back.jpg'
import angular from './assets/images/angular.png'
import css from './assets/images/css.png'
import go from './assets/images/go.png'
import html from './assets/images/html.png'
import rail from './assets/images/rail.png'
import react from './assets/images/react.png'
import scala from './assets/images/scala.png'
import vue from './assets/images/vue.png'
import GameBoard from './components/game/GameBoard';

import bear from './assets/images/bear.jpg'





const words_card_2_json = `[{
  "english":"butterfly",
  "transcription":"[ ˈbʌtəflaɪ ]",
  "russian":"бабочка",
  "tags":"животные",
  "id":"1"
}, {
  "english":"butterfly",
  "transcription":"[ ˈbʌtəflaɪ ]",
  "russian":"бабочка",
  "tags":"животные",
  "id":"2"
}, {
  "english":"butterfly",
  "transcription":"[ ˈbʌtəflaɪ ]",
  "russian":"бабочка",
  "tags":"животные",
  "id":"3"
}]`;

const words_card_2 = JSON.parse(words_card_2_json);

const cards = [{
      id: 1,
      type: bear,
      backImg,
      frontImg: bear,
      frontText: "мишка",
      flipped: false
},
{
  id: 2,
  type: bear,
  backImg,
  frontImg: bear,
  frontText: "bear",
  flipped: false
},
{
  id: 3,
  type: go,
  backImg,
  frontImg: go,
  flipped: false
},
{
id: 4,
type: go,
backImg,
frontImg: go,
flipped: false
}
]


function App() {
  const cards = buildCards()
  return (
     <BrowserRouter>
    <div className="App">

      <Header/>
      
      

      <div className="App-wrapper-content">
        <Route path="/design_1" component={Design_1}/>
        <Route path="/design_2" component={Design_2}/>
      </div>

      <NeonBtn/>

      <CardFlip isFlipped={false} url={"https://папироска.рф/wa-data/public/shop/products/31/10/1031/images/100165/100165.aromatizator-ngf---zelenoe-yabloko.970.jpg"} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"}/>
      <CardFlip isFlipped={true} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"}/>

      <div className="card_2_body">
      <div className="container">
      {words_card_2.map((word)=>
      <Card_2 key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )}
      </div>
      </div>

<div className="cards">
{wordsAPI.map((word)=>
      <Flashcard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )}
      </div>
      


      <div>
        <List/>
      </div>

      

      {/* {wordsAPI.map((word)=>
      <TestCard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )} */}


{/* <Card_Cart title={"Spoon"} price={100} description={"very very extraordinary"} imgLink={""} addedToCart={true}/> */}

<Table/>

<GameBoard cards={cards} />


    </div>
  </BrowserRouter>
  );
}

export default App;

// ==============================     game
function buildCards() {
  // let id = 0
  // const images = {angular, css, go, html, rail, react, scala, vue}
  // // console.log(images);
  // const cards = Object.keys(images).reduce((result, item) => {
  //   const getCard = () => ({
  //     id: id++,
  //     type: item,
  //     backImg,
  //     frontImg: images[item],
  //     flipped: false,
  //   })
  //   // console.log([...result, getCard(), getCard()]);
  //   return [...result, getCard(), getCard()]
  // }, [])
  // // console.log(cards);
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
