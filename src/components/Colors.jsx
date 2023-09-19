//----- IMPORTS -----//
import React, { useState } from 'react';

import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectorOpen = 'div {'
    const selectorClosed = '};'

    const bgcCode = `background-color: red;`;
    const tcCode = `color: red;`;
    const bcCode = `border: red solid 5px;`;

    const colorCSS = [
        {
            title: 'Colors',
            description: "Click through the slides to see different ways you can implement color into your styling.",
            docs: 'https://www.w3schools.com/cssref/css_colors.php',
            css: 'Colors',
        },
        {
            title: 'Background Color',
            description: "Use this property to set an element's background color. You can use a color name, hex code, or rgb code.",
            docs: 'https://www.w3schools.com/css/css_background.asp',
            css: <div>
                {selectorOpen}
                <br></br>
                    {bgcCode}
                <br></br>
                {selectorClosed}
                </div>,
        },
        {
            title: 'Text Color',
            description: 'Use this property to set a text color. You can use a color name, hex code, or rgb code.',
            docs: 'https://www.w3schools.com/css/css_text.asp',
            css: <div>
            {selectorOpen}
            <br></br>
                {tcCode}
            <br></br>
            {selectorClosed}
            </div>,
        },
        {
            title: 'Border Color',
            description: 'Use this property to set a border color for an element. You can use a color name, hex code, or rgb code.',
            docs: 'https://www.w3schools.com/css/css_border_color.asp',
            css: <div>
            {selectorOpen}
            <br></br>
                {bcCode}
            <br></br>
            {selectorClosed}
            </div>,
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colorCSS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? colorCSS.length - 1 : prevIndex - 1
        );
    };

    const currentColor = colorCSS[currentIndex];

    return (
        <div className="css-carousel">
            <div className="carousel-buttons">
                <button onClick={prevSlide}> ← </button>
            </div>
            <div className='css-card'>
                <div className="css-header">
                    <h3>{currentColor.title}</h3>
                </div>
                <div className="css-details">
                    <p>{currentColor.description}</p>
                    <button><a href={currentColor.docs} target='_blank'>Docs</a></button>
                </div>
                <div className='css-code'>
                    <div>
                        {currentColor.css}
                    </div>
                </div>
            </div>
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};