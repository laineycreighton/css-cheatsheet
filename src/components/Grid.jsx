//----- IMPORTS -----//
import React, { useState } from 'react';

//CSS
import '../assets/css/Cards.css';

//----- EXPORTS -----//
export default function Colors() {
    const [currentIndex, setCurrentIndex] = useState(0);

//Example Div
    const selectorOpen = 'div {'
    const selectorGrid = 'display: grid;'
    const selectorClosed = '};'

    //Example CSS
    const gap = `gap: 15px 10px;`;
    const justifyItems = 'justify-items: center;';
    const alignItems = 'align-items: start;';
    const placeItems = 'place-items: center;';

    //Font Cards
    const fontCSS = [
        {
            title: 'Grid',
            description: "Click through these slides to see different ways you can implement grid for styling your layout.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            grid: 'Grid',
        },
        {
            title: 'Grid',
            description: "Use this property to define a grid container.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/#aa-display',
            grid: <div>
                {selectorOpen}
                <br></br>
                {selectorGrid}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Gap',
            description: "Use this property to define the gap size between a grid's children elements.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/#aa-gapgrid-gap',
            grid: <div>
                {selectorOpen}
                <br></br>
                {selectorGrid}
                <br></br>
                {gap}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Justify Items',
            description: "Use this property to align items along the rows.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/#aa-justify-items',
            grid: <div>
                {selectorOpen}
                <br></br>
                {selectorGrid}
                <br></br>
                {justifyItems}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Align Items',
            description: "Use this property to align items aling the columns.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items',
            grid: <div>
                {selectorOpen}
                <br></br>
                {selectorGrid}
                <br></br>
                {alignItems}
                <br></br>
                {selectorClosed}
            </div>,
        },
        {
            title: 'Place Items',
            description: "Use this property to quickly center items within the grid.",
            docs: 'https://css-tricks.com/snippets/css/complete-guide-grid/#aa-place-items',
            grid: <div>
                {selectorOpen}
                <br></br>
                {selectorGrid}
                <br></br>
                {placeItems}
                <br></br>
                {selectorClosed}
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

            {/*----- Displayed Slide ---*/}
            <div className='css-card'>

                {/* Title */}
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
                    {currentFont.grid}
                </div>
            </div>

            {/*-- Right Button --*/}
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};