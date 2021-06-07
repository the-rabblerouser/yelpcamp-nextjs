import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from 'reactstrap';
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
			<Navbar color="light" light expand="md" sticky={'top'}>
				<Container>
					<NavbarBrand href="/">Yelp Camp</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav navbar>
							{session && (
								<>
									<NavItem>
										<Link href="/campgrounds" as={`/campgrounds`}>
											<NavLink href="/campgrounds">Campgrounds</NavLink>
										</Link>
									</NavItem>
									<NavItem>
										<Link href="/newCampground" as={`/newCampground`}>
											<NavLink href="/newCampground">New Campground</NavLink>
										</Link>
									</NavItem>

									<NavItem>
										<NavLink
											href="#"
											className="btn-signin"
											onClick={handleSignout}>
											Sign Out
										</NavLink>
									</NavItem>
								</>
							)}
							{!session && (
								<>
									<NavItem>
										<NavLink
											href="#"
											onClick={handleSignin}
											className="btn-signin">
											Sign In
										</NavLink>
									</NavItem>
								</>
							)}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
