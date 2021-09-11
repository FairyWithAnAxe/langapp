import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import smoke from './smoke.mp4'




function Header() {
    return (
        <div className="header">
            <section>
                <h2>@FairyWithAnAxe</h2>
                <video muted loop autoPlay controls >
                    <source src={smoke} type="video/mp4" />
                </video>
            </section>
        </div>
    )
}

export default Header

