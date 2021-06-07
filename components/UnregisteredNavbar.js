import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const UnregisteredNavbar = (props) => {
	const [session] = useSession();

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const handleSignin = (e) => {
		e.preventDefault();
		signIn(null, { callbackUrl: 'http://localhost:3000/campgrounds' });
	};

	const handleSignout = (e) => {
		e.preventDefault();
		signOut();
	};

	return (
		<>
			<Navbar light expand="md" sticky={'top'}>
				<Container>
					<NavbarBrand href="/">Yelp Camp</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							{session && (
								<>
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

export default UnregisteredNavbar;
