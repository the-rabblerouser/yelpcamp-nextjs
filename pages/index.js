import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<div className={styles.container}>
			<Head>
				<title>Yelp Camp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>{data[0].title}</h1>
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
	);
}
