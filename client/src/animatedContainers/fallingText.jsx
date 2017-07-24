import React from 'react';
import Anime from 'react-anime';

const FallingText = (props) => {
  if (props.shouldAnimate) {
    return(
      <Anime
        translateY={[-1000, 0]}
        duration={ (el, i, l) => 3000 }
        delay={ (el, i) => 2000 + 100 * i}
        elasticity={ (el, i) => 100 + i * 20}
        complete={ props.onComplete ? props.onComplete : null}
        easing="easeOutBack"
        >
        {props.text.split('').map( (el) => createLetter(el))}
      </Anime>
    );
  } else {
    return (
      <span>
        {props.text.split('').map( (el) => createLetter(el))}
      </span>
    )
  }
}

const createLetter = (letter) => {
  return(
    <div className="letter">
    {letter}
  </div>);
}

export default FallingText;
