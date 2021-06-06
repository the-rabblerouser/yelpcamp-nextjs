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
} from 'reactstrap';
import { useSession, signOut } from 'next-auth/client';

const NavigationBar = (props) => {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const handleSignout = async (e) => {
		e.preventDefault();
		const { url } = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(url);
	};

	return (
		<>
			<Navbar light expand="md" sticky={'top'}>
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
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
