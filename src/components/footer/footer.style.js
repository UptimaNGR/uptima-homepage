import styled from 'styled-components';

export const FooterStyle = styled.div`
	background: #050484;
	padding: 30px 0;
	position: relative;

	.footer-top-content,
	.footer-bottom-content {
		display: flex;
		justify-content: space-between;

		color: #fff;
		width: 100%;
		font-size: 15px;

		@media (max-width: 480px) {
			display: block;
			text-align: center;
		}
	}

	.footer-top-content {
		li {
			list-style: none;
			line-height: 2rem;
			font-size: 14px;

			&:first-child {
				font-weight: 600;
				font-size: 16px;
			}
		}

		/* @media (max-width: 480px) {
			margin: 10px 0;
		} */

		.social-icons {
			.icons-pack {
				display: flex;
				justify-content: center;

				.fb,
				.in,
				.insta {
					margin-left: 10px;
				}
			}

			@media (max-width: 480px) {
				margin: 20px auto;
			}
		}

		.contact-us-btn {
			a {
				padding: 15px 40px;
				background: #fff;
				text-decoration: none;
				border-radius: 40px;
				font-size: 14px;
				font-weight: 600;
				color: #050484;
				position: relative;
				top: 20px;
			}
		}
	}

	.footer-bottom-content {
		align-items: center;
		font-size: 14px;

		li {
			list-style: none;
		}

		.brand {
			width: 100px;
			height: 100px;

			@media (max-width: 480px) {
				margin: auto;
			}

			.logo {
				width: 100%;
				height: 100%;
			}
		}

		.privacy {
			a {
				color: #fff;
				text-decoration: none;
			}
		}
	}
`;

export const FooterStyleContainer = styled.div`
	@media (max-width: 480px) {
		hr {
			margin-top: 70px;
		}
	}
`;
