import styled from 'styled-components';

export const MiniCardsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-row-gap: 50px;
	grid-column-gap: 30px;
	justify-content: space-between;
	align-items: center;
`;

export const WhoAreWeTextContainer = styled.div`
	width: 100%;
	text-align: center;
	display: block;
	margin-bottom: 100px;
`;

export const WhoAreWeText = styled.div`
	width: 40%;
	margin: 0 auto;
	line-height: 1.7rem;
	font-weight: 300;

	@media (max-width: 768px) {
		width: auto;
	}

	h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 600;
		font-size: 25px;
		color: #050384;
	}
`;
