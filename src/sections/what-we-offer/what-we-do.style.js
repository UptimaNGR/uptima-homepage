import styled from 'styled-components';

export const WhatWeOfferStyle = styled.div`
	margin-bottom: 100px;

	h3 {
		text-align: center;
		margin-bottom: 40px;
		font-family: 'Nunito', sans-serif;
		font-size: 25px;
	}

	.what-we-offer-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		grid-row-gap: 50px;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 480px) {
			grid-template-columns: unset;
		}

		.what-we-offer-card {
			width: 100%;
			position: relative;
			transition: all 300ms ease;
			border-radius: 5px;

			@media (min-width: 608px) and (max-width: 1092px) {
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}

			p {
				color: #959499;
				margin: 10px 0;
				line-height: 1.5rem;
				width: 95%;
			}

			.link {
				padding: 15px 20px;
				background: #22c011;
				color: #fff;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 5px;
				opacity: 0;
				transition: all 300ms ease;
				cursor: pointer;
				text-decoration: none;
			}

			&:hover .link {
				opacity: 1;
			}

			.coming-soon {
				padding: 10px 20px;
				transform: scale(0.8);
				animation: pulse 2s infinite;
				text-align: center;
			}

			@keyframes pulse {
				0% {
					transform: scale(0.95);
				}

				70% {
					transform: scale(1.2);
				}

				100% {
					transform: scale(0.95);
				}
			}
		}
	}

	.img-container {
		height: auto;
		width: 500px;

		@media (max-width: 480px) {
			width: 100%;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;
