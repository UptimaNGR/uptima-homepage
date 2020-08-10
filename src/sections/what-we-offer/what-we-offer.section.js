import React from 'react';
import { WhatWeOfferStyle } from './what-we-do.style';
import ShotImg from 'assets/img/shot.png';

export default function WhatWeOffer() {
  return (
    <WhatWeOfferStyle>
      <h3 id="offer">What We Offer</h3>
      <div className="what-we-offer-cards">
        <div className="what-we-offer-card">
          <div className="img-container">
            <img src={ShotImg} />
          </div>
          <h4>U-Track</h4>
          <p>U-Track is an on demand cloud computing solution for remote monitoring of tanks and tankers within the oil and gas industry.</p>
        </div>
        <div className="what-we-offer-card right">
          <div className="img-container">
            <img src={ShotImg} />
          </div>
          <h4>V-Track</h4>
          <p>U-Track is an on demand cloud computing solution for remote monitoring of tanks and tankers within the oil and gas industry.</p>
        </div>
      </div>
    </WhatWeOfferStyle>
  );
}
