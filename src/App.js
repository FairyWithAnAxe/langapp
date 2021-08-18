
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Design_1 from './components/Design_1';
import Design_2 from './components/Design_2';
import Fire from './components/Fire';
import Flashcard from './components/Flashcard';
import Header from './components/Header';
import Li from './components/Li';
//import Words from './components/Words';
import wordsAPI from './components/wordsAPI.json'
// import Words from './components/Words';




// const wordsJSON = `[{
//   "english":"butterfly",
//   "transcription":"[ ˈbʌtəflaɪ ]",
//   "russian":"бабочка",
//   "tags":"животные"
// }, {
//   "english":"butterfly",
//   "transcription":"[ ˈbʌtəflaɪ ]",
//   "russian":"бабочка",
//   "tags":"животные"
// }]`;

// const words = JSON.parse(wordsJSON);


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Header/>
      
      

      <div className="App-wrapper-content">
        <Route path="/design_1" component={Design_1}/>
        <Route path="/design_2" component={Design_2}/>
      </div>

      


      {/* <List/> */}

      

      {/* <Flashcard english="butterfly" transcription="[ ˈbʌtəflaɪ ]" russian="бабочка" tags="животные" /> */}
      
      

      {/* {words.map((word)=>
      <Flashcard english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )} */}

<div className="cards">
{wordsAPI.map((word)=>
      <Flashcard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
      )}
      </div>
<div>
      <ol>
      {wordsAPI.map((word) => 
                        <Li key={word.id} english={word.english} russian={word.russian} />
                    )}
      </ol>
      </div>




      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
