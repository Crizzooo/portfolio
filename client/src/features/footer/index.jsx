import React from 'react';
import { SparkProxy, SparkScroll } from '../../animatedContainers/app-spark';
import cx from 'classnames';

//load components
import './FooterStylesheet.scss';

const Footer = () => (
  <SparkProxy.div className="row center-xs footerContainer">
    <SparkScroll.div
      className={cx("footerContent", {})}
      timeline={{}}>
        <p>built with
          <svg className="heart" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
          in
          <a href="https://www.google.com/maps/place/Fullstack+Academy+of+Code/@40.70508,-74.0113487,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a163bf6a675:0x1f79c3d76948280f!8m2!3d40.705076!4d-74.00916" target="_blank" className="footerLink"> New York </a>
          on
          <a
            href="https://github.com/Crizzooo/portfolio" className="footerLink"> github </a>
        </p>
        <p>hero image taken by <a href="https://www.flickr.com/photos/mattmacpherson/" className="footerLink">matt macpherson</a></p>
    </SparkScroll.div>
  </SparkProxy.div>
);


export default Footer;
