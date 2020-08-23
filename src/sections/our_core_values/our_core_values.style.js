import styled from 'styled-components';

export const CardsStyle = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	/* flex-wrap: wrap; */
	justify-content: space-between;
	align-items: center;
	grid-column-gap: 40px;
`;

export const OurCoreValuesStyle = styled.div`
	margin: 100px 0;

	.heading-text {
		text-align: center;
		margin: 40px 0;
		font-family: 'Nunito', sans-serif;
		font-size: 25px;
		color: #050384;
	}
`;
