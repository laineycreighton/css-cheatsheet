//----- IMPORTS -----//
import React, { useState } from 'react';

//CSS
import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    //Example Div
    const selectorOpen = 'p {';
    const selectorClosed = '};';
    const fontFaceOpen = '@font-face {';
    const fontFaceFF = 'font-family: yourfontname;';
    const fontfaceSRC = 'src: url("filepath")';

    //Example CSS
    const ffamCode = `font-family: "Times New Roman";`;
    const tcCode = `font-family: yourfontname;`;

    //Font Cards
    const fontCSS = [
        {
            title: 'Fonts',
            description: "Click through the slides to see different ways you can implement different fonts into your styling.",
            docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font',
            font: 'Fonts',
        },
        {
            title: 'Font Family',
            description: "Use this property to set a font style for an element.",
            docs: 'https://www.w3schools.com/cssref/pr_font_font-family.php',
            font: <div>
                {selectorOpen}
                <br></br>
                {ffamCode}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Font Face',
            description: 'Use this property to set a font style using your own font either from a website or a file.',
            docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face',
            font: <div>
                <div>
                    {fontFaceOpen}
                    <br></br>
                    {fontFaceFF}
                    <br></br>
                    {fontfaceSRC}
                    <br></br>
                    {selectorClosed}
                </div>
                <br></br>
                <div>
                    {selectorOpen}
                    <br></br>
                    {tcCode}
                    <br></br>
                    {selectorClosed}
                </div>
            </div>,
        },
    ];

    //Handles the Carousel Slides
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fontCSS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? fontCSS.length - 1 : prevIndex - 1
        );
    };

    //Displays the Carousel Slide
    const currentFont = fontCSS[currentIndex];

    //Return
    return (
        //---------- CAROUSEL ----------//
        <div className="css-carousel">
            {/*-- Left Button --*/}
            <div className="carousel-buttons">
                <button onClick={prevSlide}> ← </button>
            </div>

            {/* Title */}
            <div className='css-card'>
                <div className="css-header">
                    <h3>{currentFont.title}</h3>
                </div>

                {/* Details */}
                <div className="css-details">
                    <p>{currentFont.description}</p>
                    <button><a href={currentFont.docs} target='_blank'>Docs</a></button>
                </div>

                {/* Code Example */}
                <div className='css-code'>
                    {currentFont.font}
                </div>
            </div>

            {/*-- Right Button --*/}
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};