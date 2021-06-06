import Head from 'next/head';
import Link from 'next/link';

import UnregisteredNavbar from '../components/UnregisteredNavbar';

import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<>
			<UnregisteredNavbar />
			<div className={styles.container}>
				<Head>
					<title>Yelp Camp</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>Yelp Camp</h1>
					<br />
					<div>
						<Link href="/campgrounds" as={`/campgrounds`}>
							<a>View Campgrounds</a>
						</Link>
					</div>
					<br />

					<div>
						<Link href="/NewCampground" as={`/newcampground`}>
							<a>Create a Campground</a>
						</Link>
					</div>
				</main>
			</div>
		</>
	);
};

export default Home;
