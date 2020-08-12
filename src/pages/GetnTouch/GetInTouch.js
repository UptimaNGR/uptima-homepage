import React, { useState } from 'react';
import Header from 'components/header/header.component';
import { GetInTouchStyle } from './get-in-touch-style';
import BannerImg from 'assets/img/banner2.png';
import { Container } from 'App.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ErrorAnimation } from 'lib/animation/error.animation';
import Spinner from 'components/spinner/spinner.component';
import { ReactComponent as MessageIcon } from 'assets/img/email.svg';

const FormSchema = yup.object().shape({
	name: yup.string().required('name cannot be left blank').min(2, 'Too Short!').max(50, 'Too Long!'),
	phoneNumber: yup.string().required('Phone number cannot be left blank'),
	email: yup.string().email('Invalid email').required('Email cannot be left blank'),
	companyName: yup.string().required('company name cannot be left blank'),
	message: yup.string().required('description cannot be left blank'),
});

export default function GetInTouch() {
	const { handleSubmit, errors, register, reset } = useForm({
		resolver: yupResolver(FormSchema),
	});

	const [posting, setPosting] = useState(false);
	const [success, setSuccess] = useState(false);

	function onSubmit(data) {
		postForm(data);
	}

	function postForm(data) {
		setPosting(true);
		setSuccess(false);

		fetch('http://utrackapi.uptima.ng/api/v1/connect', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setPosting(false);
				setSuccess(true);
				reset();
				setTimeout(() => {
					setSuccess(false);
				}, 5000);
			})
			.catch((err) => {
				console.error(err);
				setPosting(false);
				setSuccess(false);
			});
	}

	return (
		<GetInTouchStyle>
			<Header backgroundImg />
			<Container>
				<div className="banner-content">
					<img src={BannerImg} alt="banner" />
					<div className="banner-text">
						<h4>Talk to Us</h4>
						<p>
							Feel free to reach out to us, our team is here to answer your questions. Kindly fill out the
							form below and we’ll be in touch.
						</p>
					</div>
				</div>
				<div className="step-form">
					<div className="next-step">
						<h4>What would the next step be?</h4>
						<div className="steps">
							<div className="step">
								<h6>1. We’ll prepare a proposal</h6>
								<p>Required scope, timeline and price will be included.</p>
							</div>
							<div className="step">
								<h6>2. Together we discuss it</h6>
								<p>
									Let’s get acquainted and discuss all the possible variants and options.Google meet
									or skype usually works great.
								</p>
							</div>
							<div className="step">
								<h6>3. Let’s start building</h6>
								<p>When the contract is signed and all goals are set, we can start the first sprint.</p>
							</div>
						</div>
					</div>

					<div className="form-container">
						<div className="form-header">
							<div className="square">
								<MessageIcon className="icon" />
							</div>
							<p>
								Write us a few words about your project and we’ll prepare a proposal for you within 24
								hours.
							</p>
						</div>
						<div className="form-content">
							<form onSubmit={handleSubmit(onSubmit)}>
								{success && (
									<div className="message-container">
										<span className="success-message">
											Thank you for reaching out to us. We would get back to you shortly
										</span>
										<span className="close" onClick={() => setSuccess(false)}>
											x
										</span>
									</div>
								)}
								<div className="form-control">
									<div className="input-container">
										<input type="text" placeholder="Enter Name" name="name" ref={register} />
										{errors.name && <ErrorAnimation>{errors.name.message}</ErrorAnimation>}
									</div>
									<div className="input-container">
										<input type="text" placeholder="Enter Email" name="email" ref={register} />
										{errors.email && <ErrorAnimation>{errors.email.message}</ErrorAnimation>}
									</div>
								</div>
								<div className="form-control">
									<div className="input-container">
										<input
											type="text"
											placeholder="Enter Company Name"
											name="companyName"
											ref={register}
										/>
										{errors.companyName && (
											<ErrorAnimation>{errors.companyName.message}</ErrorAnimation>
										)}
									</div>
									<div className="input-container">
										<input
											type="text"
											placeholder="Enter Phone Number"
											name="phoneNumber"
											ref={register}
										/>
										{errors.phoneNumber && (
											<ErrorAnimation>{errors.phoneNumber.message}</ErrorAnimation>
										)}
									</div>
								</div>
								<div className="form-control">
									<div className="input-container">
										<textarea
											placeholder="Describe what you're building"
											name="message"
											ref={register}
										></textarea>
										{errors.message && <ErrorAnimation>{errors.message.message}</ErrorAnimation>}
									</div>
								</div>
								{posting ? (
									<Spinner borderWidth="3px" size="30px" color="#050384" />
								) : (
									<button>SEND</button>
								)}
							</form>
						</div>
					</div>
				</div>
			</Container>
		</GetInTouchStyle>
	);
}
