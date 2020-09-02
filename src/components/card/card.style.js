import styled from 'styled-components';

export const CardStyle = styled.div`
	max-height: 200px;
	display: flex;
	margin-bottom: 50px;
	border-radius: 6px;
	overflow: hidden;
	box-shadow: 0px 5px 10px rgba(0,0,0,.15);
	transition: transform 300ms ease;

	&:hover{
		transform: translateY(10px);
	}

	.card-img {
		height: 100%;
		margin: 0;
		padding: 0;
		align-self: stretch;
		position: relative;
		left: -6px;

	}
`;

export const CardTextContainer = styled.div`
	padding: 0 20px;
	color: #959499;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding: 30px 10px;

	h3 {
		color: #000;
		font-weight: 600;
		font-size: 16px;
		margin: 0;
		font-family: 'Nunito', sans-serif;
	}

	p {
		font-weight: 300;
		font-size: 15px;
		line-height: 1.4rem;
		font-family: 'Nunito', sans-serif;
	}
`;
