import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import '../../Cards_1/NeonCard.css'


const Card_slider = ({ words, progress, progressChange }) => {

    const [data, setData] = useState([{
        id: "4",
        isFlipped: false,
        english: "butterfly",
        transcription: "[ ˈbʌtəflaɪ ]",
        russian: "бабочка",
        tags: "животные",
        tags_json: "[\"животные\"]"
    }])
    useEffect(() => {
        setData(words)
    }, [])




    const [isFlipped, setFlipped] = useState(false);

    const handleFlipped = () => {
        // const newData = data.slice()
        // newData[slide] = isFlipped
        const newData = [...data]
        const index = newData.findIndex(obj => obj.id === data[slide].id)
        // setFlipped(!isFlipped);
        newData[index].isFlipped = true
        setData(newData)
    };
    const [slide, setSlide] = useState(0);
    //const isButtonDisabled = slide === data.length;

    const buttonRef = useRef(null);
    useEffect(() => buttonRef.current && buttonRef.current.focus());

    useEffect(() => {
        if (slide > data.length) {
            setSlide(0);
        }
    }, [slide, data]);

    const nextSlide = () => {
        setFlipped(false);
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setFlipped(false);
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const handleChange = () => {
        handleFlipped();
        progressChange();
    }

    return (

        <div className="slider">
            <div className="box">
                <span></span>
                <div className={"content " + (data[slide].isFlipped ? "is-flipped" : "")}>
                    {data[slide].isFlipped
                        ? (<div onClick={handleFlipped} className="content-back">
                            <h2>{data[slide].transcription}</h2>
                            <p>{data[slide].russian}</p>
                            <p>{data[slide].tags}</p>
                        </div>)
                        : (<div className="content-front">
                            <h2>{data[slide].english}</h2>
                            <button ref={buttonRef} onClick={handleChange} className="content-button btn-slide-ex">Translate</button>
                        </div>)}
                </div>
            </div >

            <div className="slider-nav">

                <button
                    className="btn-slide prev"
                    // disabled={isButtonDisabled}
                    onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                </button>
                <h3 className="btn-slide-text">
                    {slide + 1}/{data.length}
                </h3>

                <button
                    className="btn-slide next"
                    // disabled={isButtonDisabled}
                    onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} className="icon" />
                </button>
                <div>
                    <h3 className="btn-slide-text">Your progress: {progress}/{data.length} </h3>
                </div>
            </div>
        </div >


        // <>
        //     <div className="slider-card" onClick={flipChange}>
        //         <div className={"slider-card__inner" + (isFlipped ? " is-flipped " : "")}>
        //             <div className="slider-card__face card__face--front">
        //                 <h2>{data[slide].english}</h2>
        //             </div>
        //             <div className="slider-card__face card__face--back">
        //                 <div className="slider-card__content">
        //                     <div className="slider-card__header">
        //                         <h2>{data[slide].english}</h2>
        //                     </div>
        //                     <div className="slider-card__body">
        //                         <h3>Тема: {data[slide].tags}</h3>
        //                         <h3>Транскрипция: {data[slide].transcription}</h3>
        //                         <h3>Перевод: {data[slide].russian}</h3>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <h3>
        //         {slide}/{data.length}
        //     </h3>
        //     <button
        //         className="btn-slide prev"
        //         onClick={prevSlide}>prev</button>
        //     <button
        //         className="btn-slide next"
        //         onClick={nextSlide}>next</button>

        // </>
    );
};

export default Card_slider;

