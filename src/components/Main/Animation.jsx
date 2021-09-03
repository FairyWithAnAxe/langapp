import React from 'react'
import star from '../../assets/images/star.png'
import audio from '../../assets/images/background.mp3'
import './Animation.css'
import NeonBtn from './NeonBtn'

function Animation() {
    return (
        <>
            <section>
                <div className="set">
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                </div>

                <div className="set2">
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                </div>

                {/* <div className="set3">
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                </div> */}
            </section>

            <audio controls>
                <source src={audio} />
                <p>Ваш браузер не поддерживает аудио</p>
            </audio>

            <NeonBtn />
        </>
    )
}

export default Animation
