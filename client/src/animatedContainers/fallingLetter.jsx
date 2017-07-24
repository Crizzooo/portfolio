import React from 'react';
import Anime from 'react-anime';

const FallingLetter = (props) => {
  return(
    <Anime
      translateY={[-1000, 0]}
      duration={1000 + props.index * 300}
      delay={2000 + 100 * props.index}
      elasticity={100 + props.index * 20}
      easing="easeOutBack"
      >
      <div className="letter">
        { props.letter }
      </div>
    </Anime>
  );
}

export default FallingLetter;
