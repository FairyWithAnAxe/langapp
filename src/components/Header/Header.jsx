import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import smoke from './smoke.mp4'



class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <section>
                    <h2>@FairyWithAnAxe</h2>
                    <video src={smoke} muted loop autoplay type="video/mp4"></video>
                </section>
            </div>
        );
    }
}

export default Header;