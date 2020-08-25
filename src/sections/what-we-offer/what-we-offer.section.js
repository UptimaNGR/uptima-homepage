import React from 'react';
import { WhatWeOfferStyle } from './what-we-do.style';
import ShotImg from 'assets/img/shot.png';

export default function WhatWeOffer() {
	return (
		<WhatWeOfferStyle id="offer">
			<h3>What We Offer</h3>
			<div className="what-we-offer-cards">
				<div className="what-we-offer-card">
					<div className="img-container">
						<img src={ShotImg} alt="what-we-offer" />
					</div>
					<h4>U-Track</h4>
					<p>
						U-Track is an on demand cloud computing solution for remote monitoring of tanks and tankers
						within the oil and gas industry.
					</p>

					<a rel="noopener noreferrer" className="link" target="_blank" href="https:/google.com">
						Open Link
					</a>
				</div>
				<div className="what-we-offer-card right">
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
