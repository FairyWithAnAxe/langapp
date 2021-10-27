import React from 'react'
import './Header.css'
import smoke from './smoke.mp4'

const Header = () => {
    return (
        <div className="header">
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

