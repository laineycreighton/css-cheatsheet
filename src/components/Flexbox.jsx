//----- IMPORTS -----//
import React, { useState } from 'react';

import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectorOpen = 'div {'
    const selectorFlex = 'display: flex;'
    const selectorClosed = '};'

    const directon = 'flex-direction: column;';
    const wrap = 'flex-wrap: nowrap;'
    const justify = `justify-content: space-evenly;`;
    const align = `align-items: center;`;

    const fontCSS = [
        {
            title: 'Flexbox',
            description: "Click through these slides to see different ways you can implement flexbox for styling your layout.",
            docs: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            flex: 'Flexbox',
        },
        {
            title: 'Flex',
            description: "Use this property to define a flex container.",
            docs: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-display',
            flex: <div>
                {selectorOpen}
                <br></br>
                {selectorFlex}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Flex Direction',
            description: "Use this property to define the direction an element's children elements should flow.",
            docs: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-direction',
            flex: <div>
            {selectorOpen}
            <br></br>
            {selectorFlex}
            <br></br>
            {directon}
            <br></br>
            {selectorClosed}
        </div>,
        },
        {
            title: 'Flex Wrap',
            description: "Use this property to determine if a container's items should wrap when the element is flexing.",
            docs: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap',
            flex: <div>
            {selectorOpen}
            <br></br>
            {selectorFlex}
            <br></br>
            {wrap}
            <br></br>
            {selectorClosed}
        </div>,
        },
        {
            title: 'Justify Content',
            description: "Use this property to set spacing for an element's children elements.",
            docs: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content',
            flex: <div>
            {selectorOpen}
            <br></br>
            {selectorFlex}
            <br></br>
            {justify}
            <br></br>
            {selectorClosed}
        </div>,
        },
        {
            title: 'Align Items',
            description: "Use this property to set an element's background color.",
            docs: 'https://www.w3schools.com/css/css_background.asp',
            flex: <div>
            {selectorOpen}
            <br></br>
            {selectorFlex}
            <br></br>
            {align}
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
                    {currentFont.flex}
                </div>
            </div>
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};