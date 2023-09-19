//----- IMPORTS -----//
import React, { useState } from 'react';

import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectorOpen = 'div {'
    const selectorClosed = '};'

    const bgcCode = `background-color: red;`;
    const colorCode = `color: red;`;

    const fontCSS = [
        {
            title: 'Grid',
            description: "Swipe through this say to see different ways you can implement color into your styling.",
            docs: 'https://www.w3schools.com/cssref/css_colors.php',
            css: 'Grid',
        },
        {
            title: 'Grid',
            description: "Use this property to set an element's background color.",
            docs: 'https://www.w3schools.com/css/css_background.asp',
            font: <div>
                {selectorOpen}
                <br></br>
                {bgcCode}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Gap',
            description: 'Use this property to set a text color.',
            docs: 'https://www.w3schools.com/css/css_text.asp',
            font: <div>
                {selectorOpen}
                <br></br>
                {bgcCode}
                <br></br>
                {selectorClosed}
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
                    {currentFont.css}
                </div>
            </div>
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};