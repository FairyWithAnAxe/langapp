import React from 'react'
import GameBoard from './GameBoard'
import Comments from './Comments/Comments'


import backImg from '../../assets/images/back.jpg'
import angular from '../../assets/images/angular.png'
import css from '../../assets/images/css.png'
import go from '../../assets/images/go.png'
import html from '../../assets/images/html.png'
import rail from '../../assets/images/rail.png'
import react from '../../assets/images/react.png'
import scala from '../../assets/images/scala.png'
import vue from '../../assets/images/vue.png'


import bear from '../../assets/images/bear.jpg'

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




function Game() {
    const cards = buildCards()
    return (
        <div>
            <GameBoard cards={cards} />
            <div>
                <Comments currentUserId="1" />
            </div>
        </div>
    )
}

export default Game

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
        let copyCurrent = { ...arr[i] }
        let copyRandom = { ...arr[randomIdx] }
        arr[i] = copyRandom
        arr[randomIdx] = copyCurrent
    }
    return arr
}



