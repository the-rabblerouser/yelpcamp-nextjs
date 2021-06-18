import React from 'react';
import { Provider } from 'next-auth/client';

import '../styles/stars.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Component {...pageProps} />
		</Provider>
	);
}
