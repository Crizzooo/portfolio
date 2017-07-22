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
          Contact
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 around-xs contentHolder">
          { Object.keys(ContactContent).map( (key) =>
            ( <ContactCard /> )
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ContactContainer;
