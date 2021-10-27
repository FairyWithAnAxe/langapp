import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li><NavLink to="/homework" data-text="Homework">Homework</NavLink></li>
                <li><NavLink to="/" data-text="Main">Main</NavLink></li>
                <li><NavLink to="/game" data-text="Game">Game</NavLink></li>
                <li><NavLink to="/card 1" data-text="Cards 1">Cards 1</NavLink></li>
                <li><NavLink to="/card 2" data-text="Cards 2">Cards 2</NavLink></li>
                {/* <li><NavLink to="/card 3" data-text="Cards 3">Cards 3</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Nav
