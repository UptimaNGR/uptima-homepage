import styled from 'styled-components';
import {
	HashLink as Link
} from 'react-router-hash-link';

export const BannerStyle = styled.div `
	position: relative;
	z-index: 5;
  overflow-x: hidden;
  overflow-y: hidden;
	margin-bottom: 60px;

	.banner-img {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 80vh;
	}

	.banner-top-img {
		@media (max-width: 768px) {
			display: block;
			height: 50vh;
		}
	}
`;

export const BannerStyleContainer = styled.div `
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;

	@media (max-width: 768px) {
		display: block;
		width: inherit;
	}
`;

export const BannerHeading = styled.h3 `
	font-size: 32px;
	font-family: 'Nunito', sans-serif;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 23.5px;
	}
`;

export const BannerBriefText = styled.h3 `
	font-size: 18px;
	font-weight: 300;
	line-height: 1.75rem;

	@media (max-width: 480px) {
		line-height: 1.5rem;
		font-size: 16px;
		letter-spacing: 0px;
		font-weight: 300;
		margin-bottom: 40px;
	}
`;

export const BannerButton = styled(Link)
`
	font-size: 14px;
	font-weight: 600;
	padding: 18px 40px;
	color: #fff;
	border: none;
	outline: none;
	background: #050484;
	border-radius: 30px;
	cursor: pointer;
	align-self: flex-start;
	font-family: 'Nunito', sans-serif;
	text-decoration: none;
`;

export const BannerImgContainer = styled.div `
	height: 400px;
	width:100%;
	position: relative;
	top: 30px;
  left:-40px;

	@media (max-width: 768px) {
		display: none;
		top: 0px;
	}
`;

export const BannerImg = styled.img`
  height: auto;
  // width:100%
  max-width: 100%;
  // max-height: 100%
  background-size: cover;
  overflow: hidden;
`;

export const BannerText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	top: 20px;

	@media (min-width: 768px) {
		padding-right:50px;
	}
`;

export const BannerContainer = styled.div ``;
