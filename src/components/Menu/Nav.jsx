import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'


function Nav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li><NavLink to="/" data-text="Homework">Homework</NavLink></li>
                <li><NavLink to="/main" data-text="Main">Main</NavLink></li>
                <li><NavLink to="/game" data-text="Game">Game</NavLink></li>
                <li><NavLink to="/card 1" data-text="Cards 1">Cards 1</NavLink></li>
                <li><NavLink to="/card 2" data-text="Cards 2">Cards 2</NavLink></li>
                <li><NavLink to="/card 3" data-text="Cards 3">Cards 3</NavLink></li>


                {/* <li><a href="#" data-text="Homework">HomeWork</a></li>
                <li><a href="#" data-text="Main">Main</a></li>
                <li><a href="#" data-text="Game">Game</a></li>
                <li><a href="#" data-text="Cards 1">Cards 1</a></li>
                <li><a href="#" data-text="Cards 2">Cards 2</a></li>
                <li><a href="#" data-text="Cards 3">Cards 3</a></li> */}
            </ul>
        </div>
    )
}

export default Nav
