import styled from 'styled-components';

export const WhatWeOfferStyle = styled.div`
	margin-bottom: 100px;
	overflow-x: hidden;
	h3 {
		text-align: center;
		margin-bottom: 40px;
		font-family: 'Nunito', sans-serif;
		font-size: 25px;
	}

	.what-we-offer-cards {
		display: grid;
		grid-template-columns: repeat(2fr, minmax(200px, 1fr));
		grid-row-gap: 50px;
		grid-column-gap: 50px;
		grid-auto-flow: column;
		justify-content: center;
  		align-content: center;

		@media (max-width: 480px) {
			// grid-template-columns: unset;
			display: block;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			max-width: 100%;
		}

		.what-we-offer-card {
			width: 350px;
			height: 400px;
			position: relative;
			transition: all 300ms ease;
			background: white;
			text-align:center;
			padding:40px;
			border-radius:5px;
			background:#EEF5FF;
			// max-width: 100%;
			@media (max-width: 768px) {
				// grid-template-columns: unset;
				// display: block;
				// justify-content: center;
				// align-items: center;
				// flex-direction: row;
				max-width: 100%;
				width: auto;
				height: auto;
				margin-bottom: 20px;
			}

			&.right{

				img{
					filter: blur(10px);
				}
			}

			


			@media (min-width: 608px) and (max-width: 1092px) {
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}

			h4{
				font-size:25px;
				position: relative;
				display:inline-block;

				&:after{
					content: "";
					position:absolute;
					left:0;
					bottom: -10px;
					height:3px;
					width:60%;
					background: #FECE38;
				}
			}

			p {
				color: #000;
				margin: 10px 0;
				line-height: 1.5rem;
				width: 95%;
				font-weight:300;
			}

			.link {
				padding: 15px 20px;
				background: #FECE38;
				color: #090483;
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

			&:hover{
				transform: translateY(10px);
			}

			&:hover .link {
				opacity: 1;
			}

			.coming-soon {
				padding: 10px 20px;
				transform: scale(0.8);
				animation: pulse 2s infinite;
				text-align: center;
				color: #000;
				font-size:19px;
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
			border-radius: 3px;
			overflow:hidden;
			box-shadow:0 3px 15px rgba(0,0,0,.2);

		@media (max-width: 480px) {
			width: 100%;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;
