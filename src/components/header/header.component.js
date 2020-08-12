import React from 'react';
import { HeaderStyle, HeaderStyleContainer } from './header.style';
import { ReactComponent as Logo } from 'assets/img/Logo_1.svg';
import { ReactComponent as LandingLogo } from 'assets/img/uptima_logo.svg';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { Container } from 'App.style';
import { Link as ScrollLink } from 'react-scroll';

export default function Header({ backgroundImg }) {
	const history = useHistory();
	const location = useLocation();

	// function scrollToTop() {
	//   scroll.scrollToTop();
	// }

	const Link = location.pathname === '/' ? ScrollLink : RouterLink;

	return (
		<HeaderStyle backgroundImg={backgroundImg}>
			<Container>
				<HeaderStyleContainer backgroundImg={backgroundImg}>
					<div data-aos="slide-down" data-aos-duration={1000} onClick={() => history.push('/')}>
						{location.pathname === '/' ? <LandingLogo className="logo" /> : <Logo className="logo" />}
					</div>
					<ul className="nav-items">
						<li className="nav-item">
							<Link className="nav-link" activeClassName="active" to="">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClassName="active"
								to="/#who-we-are"
								smooth={true}
								duration={500}
							>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" activeClassName="active" to="offer" smooth={true} duration={500}>
								Offer
							</Link>
						</li>
						<li className="nav-item">
							<RouterLink className="nav-link" activeClassName="active" to="/get-in-touch">
								Get in Touch
							</RouterLink>
						</li>
					</ul>
				</HeaderStyleContainer>
			</Container>
		</HeaderStyle>
	);
}
