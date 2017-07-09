import React from 'react';

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
          <div className=" col-xs-12 col-lg-3 contactCard">
            <div className="contactImageHolder">
            </div>
            <div className="contactImageCaption">
            </div>
          </div>
          <div className=" col-xs-12 col-lg-3 contactCard">
            <div className="contactImageHolder">
            </div>
            <div className="contactImageCaption">
            </div>
          </div>
          <div className=" col-xs-12 col-lg-3 contactCard">
            <div className="contactImageHolder">
            </div>
            <div className="contactImageCaption">
            </div>
          </div>
          <div className=" col-xs-12 col-lg-3 contactCard">
            <div className="contactImageHolder">
            </div>
            <div className="contactImageCaption">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default ContactContainer;
