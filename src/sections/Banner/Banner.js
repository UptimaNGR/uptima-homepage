import React, { useEffect } from 'react';
import { TimelineLite } from 'gsap/all';
import BannerImage from 'assets/img/Group_81.png';
import Bg from 'assets/img/bg.png';
import { BannerStyle, BannerBriefText, BannerHeading, BannerButton, BannerImg, BannerText, BannerImgContainer, BannerStyleContainer, BannerContainer } from './Banner.style';
import { Container } from 'App.style';
import Typed from 'react-typed';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Banner() {
  useEffect(() => {
    const tl = new TimelineLite({ paused: true });
    tl.staggerTo('#heading', 0.5, { autoAlpha: 1, y: -20 }, 0.1);
  }, []);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <BannerStyle>
      <img src={Bg} alt="image" />
      <Container>
        <BannerStyleContainer>
          <BannerText>
            <BannerHeading id="heading">
              <Typed strings={['We Build Products that Scale.']} typeSpeed={120} />
            </BannerHeading>
            <BannerBriefText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </BannerBriefText>
            <BannerButton data-aos="zoom-out" data-aos-duration={2000} to="/#who-we-are" offset={-20}>
              Get Started
            </BannerButton>
          </BannerText>
          <BannerImgContainer data-aos="fade-left" data-aos-duration={2000}>
            <BannerImg src={BannerImage} />
          </BannerImgContainer>
        </BannerStyleContainer>
      </Container>
    </BannerStyle>
  );
}
