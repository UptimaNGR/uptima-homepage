import styled from 'styled-components';

export const MiniCardStyle = styled.div`
	text-align: center;

	&:not(:first-child) {
		margin-left: 50px;

		@media (max-width: 768px) {
			margin-left: 0;
		}
	}

	.mini-card-image {
		height: 80px;
		width: 80px;
	}
`;

export const MiniCardHeader = styled.div`
	font-weight: 600;
	font-size: 20px;
	margin: 10px 0;
	font-family: 'Nunito', sans-serif;
`;

export const MiniCardBrief = styled.div`
	font-family: 'Nunito', sans-serif;
	font-weight: 300;
	color: #959499;
	margin: 10px 0;
	line-height: 1.5rem;
	font-size: 17px;
`;
