import React from 'react'
import './Fire.scss'





class Fire extends React.Component {
    render() {

        return (
            <div className="fire">
                <div className="fire-text">
                    {/* <h2>FLASHCARDS</h2> */}
                    <h2>GAME</h2>
                </div>
                <svg>
                    <filter id="fire">
                        <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                            <animate attributeName="baseFrequency" dur="10s" values="0.1 0.1;0.12 0.2" repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="25"></feDisplacementMap>
                    </filter>
                </svg>
            </div>
        );
    }
}

export default Fire;