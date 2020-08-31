import React from 'react';
import { CardStyle, CardTextContainer } from './card.style';

export default function Card({ info }) {
	return (
		<CardStyle data-aos="zoom-out" data-aos-duration={600}>
			<div style={{ height: '100%' }}>{info.image}</div>
			<CardTextContainer>
				<h3>{info.title}</h3>
				<p>{info.brief}</p>
			</CardTextContainer>
		</CardStyle>
	);
}
