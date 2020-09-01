import React from 'react';
import { WhatWeOfferStyle } from './what-we-do.style';
import ShotImg from 'assets/img/shot.png';
import utrack from 'assets/img/utrack.gif';

export default function WhatWeOffer() {
	return (
		<WhatWeOfferStyle id="offer">
			<h3>What We Offer</h3>
			<div className="what-we-offer-cards">
				<div className="what-we-offer-card" data-aos="slide-left" data-aos-duration={2000}>
					<div className="img-container">
            {/* <video src={utrack} width="600" height="300" controls="controls" autoplay="true" /> */}
            <img src={utrack} alt="what-we-offer" />
					</div>
					<h4>U-Track</h4>
					<p>
						U-Track is an on demand cloud computing solution for remote monitoring of tanks and tankers
						within the oil and gas industry.
					</p>

					<a rel="noopener noreferrer" className="link" target="_blank" href="http://utrack.uptima.ng">
						Click here to open
					</a>
				</div>
				<div className="what-we-offer-card right" data-aos="slide-right" data-aos-duration={2000}>
					<div className="img-container">
						<img src={ShotImg} alt="what-we-offer" />
					</div>
					<h4>V-Track</h4>
					<p className="coming-soon">Coming soon...</p>
				</div>
			</div>
		</WhatWeOfferStyle>
	);
}
