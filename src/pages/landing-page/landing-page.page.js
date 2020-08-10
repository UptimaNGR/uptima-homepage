import React from 'react';
import Banner from 'sections/Banner/Banner';
import { Container } from 'App.style';
import WhoWeAre from 'sections/WhoWeAre/WhoWeAre';
import OurCoreValues from 'sections/our_core_values/our_core_values.section';
import WhatWeOffer from 'sections/what-we-offer/what-we-offer.section';
import Header from 'components/header/header.component';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <WhoWeAre />
        <OurCoreValues />
        <WhatWeOffer />
      </Container>
    </>
  );
}
