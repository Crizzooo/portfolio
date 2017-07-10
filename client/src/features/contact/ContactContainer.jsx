import React from 'react';

import ContactCard from './ContactCard.jsx';

//load components
import './ContactStylesheet.scss';

const ContactContainer = () => (
  <div className="start-xs contactContainer">
    <div className="rowContainer">
      <div className="row">
        <div className="col-xs-12 contactHeader">
          Contact
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 around-xs contentHolder">
          { [1, 2, 3, 4].map( (elem) => (<ContactCard />)) }
        </div>
      </div>
    </div>
  </div>
);


export default ContactContainer;
