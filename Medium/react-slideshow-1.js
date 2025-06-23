// https://www.hackerrank.com/challenges/react-slideshow-1/problem
// React

import React, { useState } from "react";

function Slides({ slides }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slideChangeHandler = (nextSlideIndex) => {
    setActiveSlideIndex(nextSlideIndex);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => slideChangeHandler(0)}
          disabled={activeSlideIndex === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={activeSlideIndex === 0}
          onClick={() => slideChangeHandler(activeSlideIndex - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={activeSlideIndex === slides.length - 1}
          onClick={() => slideChangeHandler(activeSlideIndex + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[activeSlideIndex].title}</h1>
        <p data-testid="text">{slides[activeSlideIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
