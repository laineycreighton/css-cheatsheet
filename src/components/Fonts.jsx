//----- IMPORTS -----//
import React, { useState } from 'react';

import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectorOpen = 'p {';
    const selectorClosed = '};';
    const fontFaceOpen = '@font-face {';
    const fontFaceFF = 'font-family: yourfontname;';
    const fontfaceSRC = 'src: url("filepath")';

    const ffamCode = `font-family: "Times New Roman";`;
    const tcCode = `font-family: yourfontname;`;

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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fontCSS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? fontCSS.length - 1 : prevIndex - 1
        );
    };

    const currentFont = fontCSS[currentIndex];

    return (
        <div className="css-carousel">
            <div className="carousel-buttons">
                <button onClick={prevSlide}> ← </button>
            </div>
            <div className='css-card'>
                <div className="css-header">
                    <h3>{currentFont.title}</h3>
                </div>
                <div className="css-details">
                    <p>{currentFont.description}</p>
                    <button><a href={currentFont.docs} target='_blank'>Docs</a></button>
                </div>
                <div className='css-code'>
                    {currentFont.font}
                </div>
            </div>
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};