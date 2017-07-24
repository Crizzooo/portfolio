import React from 'react';
const { SparkScroll, SparkProxy } = require('./app-spark');

export default function LeftEntrance(props){
		return(
			<div style={{height: "5000px"}}>
				<SparkProxy.h2>
					<SparkScroll.h2
					timeline={{
						topBottom: {opacity: 0},
						centerCenter: {opacity: 1}
					}}>fade</SparkScroll.h2>
				</SparkProxy.h2>
			</div>
    );
  }
