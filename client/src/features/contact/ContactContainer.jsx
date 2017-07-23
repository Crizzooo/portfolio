import React from 'react';

import ContactCard from './ContactCard.jsx';
import ContactContent from './ContactContent.js';

//load components
import './ContactStylesheet.scss';

const ContactContainer = () => (
  <div className="start-xs contactContainer">
    <div className="rowContainer">
      <div className="row">
        <div className="col-xs-12 contactHeader">
          let's connect
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-11 col-md-9 col-lg-7 around-xs contentHolder">
          { Object.keys(ContactContent).map( (key) =>
            ( <ContactCard {...ContactContent[key]} /> )
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ContactContainer;
