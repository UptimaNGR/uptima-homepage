import React, { useEffect } from 'react';
import { TimelineLite } from 'gsap/all';
import BannerImage from 'assets/img/banner_img.png';
import Bg from 'assets/img/bg.png';
import {
	BannerStyle,
	BannerBriefText,
	BannerHeading,
	BannerButton,
	BannerImg,
	BannerText,
	BannerImgContainer,
	BannerStyleContainer,
} from './Banner.style';
import { Container } from 'App.style';
import Typed from 'react-typed';

export default function Banner() {
	useEffect(() => {
		const tl = new TimelineLite({ paused: true });
		tl.staggerTo('#heading', 0.5, { autoAlpha: 1, y: -20 }, 0.1);
	}, []);

	return (
		<BannerStyle>
			<img src={Bg} alt="banner" className="banner-top-img" />
			<Container>
				<BannerStyleContainer>
					<BannerText>
						<BannerHeading id="heading">
							<Typed strings={['We Build Products That Scale.', 'We Turn Your Ideas To Products.']} typeSpeed={120} loop/>
						</BannerHeading>
						<BannerBriefText>
						We utilize our wide range of knowledge and employ futuristic approaches in helping our clients have the UPTIMA solution for their personalized technological needs. 
						</BannerBriefText>
						<BannerButton data-aos="zoom-out" data-aos-duration={2000} to="#who-we-are" offset={-20}>
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
