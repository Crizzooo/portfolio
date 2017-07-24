import React from 'react';
import Anime from 'react-anime';

const FallingText = (props) => {
  if (props.shouldAnimate) {
    return(
      <Anime
        translateY={[-400, 0]}
        opacity={[0, 1]}
        duration={ (el, i) => 3000 + 100 * i }
        delay={ (el, i) => 3500 + 100 * i}
        elasticity={400}
        complete={ props.onComplete ? props.onComplete : null}
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
    <div className="letter heroHeader">
    {letter}
  </div>);
}

export default FallingText;
