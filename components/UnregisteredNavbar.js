import React, { useState } from 'react';
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
} from 'reactstrap';

const UnregisteredNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const handleSignin = () => {
		console.log(hello);
	};

	return (
		<>
			<Navbar color="dark" dark expand="md" sticky={'top'}>
				<Container>
					<NavbarBrand href="/">Yelp Camp</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link href="#" onClick={handleSignin} className="btn-signin">
									<NavLink>Sign In</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="#" onClick={handleSignin} className="btn-signin">
									<NavLink>Sign Up</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default UnregisteredNavbar;
