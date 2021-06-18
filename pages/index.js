import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';

import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<>
			<NavigationBar />
			<div className={styles.container}>
				<Head>
					<title>Yelp Camp</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1>Yelp Camp</h1>
				</main>
			</div>
		</>
	);
};

export default Home;
