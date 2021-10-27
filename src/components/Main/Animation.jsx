import React from 'react'
import star from '../../assets/images/star.png'
import audio from '../../assets/images/background.mp3'
import './Animation.css'
import NeonBtn from './NeonBtn'

const Animation = () => {
    return (
        <>
            <section className="section-stars">
                <div className="set-stars">
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                </div>
            </section>
            <audio controls autoPlay>
                <source src={audio} />
                <p>Ваш браузер не поддерживает аудио</p>
            </audio>
            <NeonBtn />
        </>
    )
}

export default Animation
