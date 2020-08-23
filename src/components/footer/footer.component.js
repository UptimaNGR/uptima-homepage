import React from 'react';
import { FooterStyle, FooterStyleContainer } from './footer.style';
import { Container } from 'App.style';
import { ReactComponent as Logo } from 'assets/img/Logo_1.svg';
import { ReactComponent as Instagram } from 'assets/img/instagram.svg';
import { ReactComponent as Twitter } from 'assets/img/twitter.svg';
import { ReactComponent as Facebook } from 'assets/img/facebook.svg';
import { ReactComponent as In } from 'assets/img/in.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<FooterStyle>
			<Container>
				<FooterStyleContainer>
					<div className="footer-top-content">
						<div className="contact-us-list">
							<li>Contact Us</li>
							<li>24 Oluloye estate, Ibadan,Oyo state.</li>
							<li>Uptima.ng</li>
							<li>info@uptima.ng</li>
							<li>08140710074</li>
						</div>

						<div className="social-icons">
							<li>Social Media</li>
							<div className="icons-pack">
								<Twitter className="tw" />
								<Facebook className="fb" />
								<Instagram className="insta" />
								<In className="in" />
							</div>
						</div>

						<div className="contact-us-btn">
							<Link to="/get-in-touch">Get in touch</Link>
						</div>
					</div>

					<hr />
					<div className="footer-bottom-content">
						<div className="brand">
							<Logo className="logo" />
						</div>
						<div className="copy-right">
							<li>Copyright c 2020 Uptima</li>
						</div>
						<div className="privacy">
							<Link to="#">Privacy & Policy</Link>
						</div>
					</div>
				</FooterStyleContainer>
			</Container>
		</FooterStyle>
	);
}
