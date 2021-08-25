
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


function App() {
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

      

      {wordsAPI.map((word)=>
      <TestCard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )}


<Card_Cart title={"Spoon"} price={100} description={"very very extraordinary"} imgLink={""} addedToCart={true}/>

<Table/>
    </div>
  </BrowserRouter>
  );
}

export default App;
