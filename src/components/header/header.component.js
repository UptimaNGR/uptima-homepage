import React, { useState, useRef } from 'react';
import { HeaderStyle, HeaderStyleContainer } from './header.style';
import { ReactComponent as Logo } from 'assets/img/Logo_1.svg';
import { ReactComponent as LandingLogo } from 'assets/img/uptima_logo.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from 'App.style';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

import { useClickAway } from 'react-use';

export default function Header({ backgroundImg }) {
	const history = useHistory();
	const location = useLocation();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const ref = useRef(null);
	useClickAway(ref, () => {
		setMenuOpen(false);
	});

	return (
		<HeaderStyle backgroundImg={backgroundImg}>
			<Container>
				<HeaderStyleContainer backgroundImg={backgroundImg} whiteIcon={location.pathname === '/' && true}>
					<div data-aos="slide-down" data-aos-duration={1000} onClick={() => history.push('/')}>
						{location.pathname === '/' ? <LandingLogo className="logo" /> : <Logo className="logo" />}
					</div>
					<ul ref={ref} className={`nav-items ${isMenuOpen && ' show'}`}>
						<li className="nav-item">
							<Link Link className="nav-link" to="">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/#who-we-are" smooth={true} duration={500} spy={true}>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/#offer" smooth={true} duration={500} spy={true}>
								Offer
							</Link>
						</li>
						<li className="nav-item">
							<RouterLink className="nav-link bordered" to="/get-in-touch">
								Get in Touch
							</RouterLink>
						</li>
					</ul>

					<div className={`menu-btn ${isMenuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}>
						<div className="menu-btn__burger"></div>
					</div>
				</HeaderStyleContainer>
			</Container>
		</HeaderStyle>
	);
}
