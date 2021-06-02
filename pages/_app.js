import React from 'react';
import { Container } from 'reactstrap';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<Layout>
			<Container>
				<Component {...pageProps} />
			</Container>
		</Layout>
	);
}

export default MyApp;
