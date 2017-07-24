import React from 'react';
import { SparkProxy, SparkScroll } from '../../animatedContainers/app-spark';

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
      <SparkProxy.div className="row center-xs">
        <SparkScroll.div
          className="row col-xs-12 col-sm-10 col-md-8 around-xs contactRow"
          timeline={{
        }}>
          { Object.keys(ContactContent).map( (key) =>
            ( <ContactCard {...ContactContent[key]} /> )
          )}
        </SparkScroll.div>
      </SparkProxy.div>
    </div>
  </div>
);

export default ContactContainer;
