import React from 'react';

import FallingLetter from './fallingLetter.jsx';

const FallingText = (props) => {
  return(
  <div className="">
    { props.text &&
      props.text.split('').map( (elem, i) => <FallingLetter letter={elem} index={i} /> ) }
  </div>
);
}

export default FallingText;
