import styled from 'styled-components';

export const HeaderStyle = styled.div`
	height: 5rem;
	background: ${(props) => (props.backgroundImg ? "url('assets/img/banner2.png')" : '#edf6ff')};
	top: 0;
	left: 0;
	z-index: 10;
	transition: top 0.8s;

	.logo {
		width: 100px;
		cursor: pointer;
	}

	.nav-items {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: -400px;
			width: 90%;
			background: #050484ed;
			border-radius: 5px;
			z-index: 2000000;
			left: 0;
			/* display: none; */
			transition: top 300ms ease-in;
			padding: 0.5rem 0;
			margin: 0 5%;
		}

		&.show {
			/* left: 50%; */
			top: 1.5%;
		}

		@media (max-width: 768px) {
			display: block;
			text-align: center;
		}

		.nav-item {
			text-decoration: none;
			list-style: none;
			margin-left: 40px;

			@media (max-width: 768px) {
				margin: 1.4rem 0;
			}

			&:last-child {
				border: 2px solid ${(props) => (props.backgroundImg ? '#fff' : ' #050484')};
				padding: 13px 30px;
				border-radius: 30px;
				font-weight: bold;

				@media (max-width: 480px) {
					border: 0;
					padding: 0;
					font-weight: normal;
				}
			}

			.nav-link {
				color: ${(props) => (props.backgroundImg ? '#fff' : ' #050484')};
				text-decoration: none;
				cursor: pointer;
				font-weight: 300;

				@media (max-width: 480px) {
					color: #fff;
					font-size: 17px;
				}

				&:last-child {
					font-family: 'Nunito', sans-serif;
				}
			}
		}
	}
`;

export const HeaderStyleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* Menu Icon */

	.menu-btn {
		position: relative;
		justify-content: center;
		align-items: center;
		width: 25px;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
		display: none;
		background: transparent;
		cursor: pointer;

		@media (max-width: 768px) {
			//CSS
			display: flex;
		}
	}

	.menu-btn__burger {
		width: 25px;
		height: 2px;
		background: ${(props) => (!props.whiteIcon ? '#fff' : ' #050484')};
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 2px;
		background: ${(props) => (!props.whiteIcon ? '#fff' : ' #050484')};
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before {
		transform: translateY(-8px);
	}
	.menu-btn__burger::after {
		transform: translateY(8px);
	}

	/* ANIMATION */
	.menu-btn.open .menu-btn__burger {
		transform: translateX(-50px);
		background: transparent;
		box-shadow: none;
	}
	.menu-btn.open .menu-btn__burger::before {
		transform: rotate(45deg) translate(35px, -35px);
	}
	.menu-btn.open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(35px, 35px);
	}
`;
