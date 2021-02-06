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

const NavigationBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar color="dark" dark expand="md" sticky={'top'}>
				<Container>
					<NavbarBrand href="/">Yelp Camp</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link href="/campgrounds" as={`/campgrounds`}>
									<NavLink href="/campgrounds">Campgrounds</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/NewCampground" as={`/newcampground`}>
									<NavLink href="/newcampground">New Campground</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
