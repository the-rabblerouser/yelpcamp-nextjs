import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/client';

const NavigationBar = () => {
	const router = useRouter();

	const [session] = useSession();

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const handleSignin = (e) => {
		e.preventDefault();
		signIn(null, { callbackUrl: 'http://localhost:3000/campgrounds' });
	};

	const handleSignout = async (e) => {
		e.preventDefault();
		const { url } = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(url);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="/">
						Yelp Camp
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toggle}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={`collapse navbar-collapse ${isOpen ? '' : 'show'}`}
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{session && (
								<>
									<li className="nav-item">
										<Link href="/campgrounds" as={`/campgrounds`}>
											<a
												className="nav-link active"
												aria-current="page"
												href="/campgrounds">
												Campgrounds
											</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/newCampground" as={`/newCampground`}>
											<a
												className="nav-link active"
												aria-current="newCapgroudn"
												href="/newCampgrounds">
												New Campground
											</a>
										</Link>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link active"
											onClick={handleSignout}>
											Sign Out
										</a>
									</li>
								</>
							)}
							{!session && (
								<>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link active"
											onClick={handleSignin}>
											Sign In
										</a>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavigationBar;
