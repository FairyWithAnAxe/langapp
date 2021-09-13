import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import smoke from './smoke.mp4'






function Header() {
    return (
        <div className="header">
            {/* <div className="logo">
                <img className="logo" src={} alt="" />
            </div>
            <div>
                <h1>Flashcards</h1>
            </div> */}
            <section className="video-fairy">
                <h2>@FairyWithAnAxe</h2>
                <video muted loop autoPlay controls >
                    <source src={smoke} type="video/mp4" />
                </video>
            </section>
        </div>
    )
}

export default Header

