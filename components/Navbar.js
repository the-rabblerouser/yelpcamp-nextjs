import React, { useState } from 'react';
import Link from 'next/link';
import {
	Collapse,
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
			<Navbar color="light" light expand="md" sticky={'top'}>
				<NavbarBrand href="/">Yelp Camp</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link href="/NewCampground" as={`/newcampground`}>
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
			</Navbar>
		</>
	);
};

export default NavigationBar;
