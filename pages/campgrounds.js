import Link from 'next/link';
import styles from '../styles/campgrounds.module.css';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Campgrounds() {
	const { data, error } = useSWR('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<div>
			<h1>{data[0].title}</h1>
			{data.map(({ _id, title }) => {
				return (
					<ul key={_id}>
						<li className={styles.listItem}>
							<Link href="/campground/[id]" as={`/campground/${title}`}>
								<a>{title}</a>
							</Link>
						</li>
					</ul>
				);
			})}
		</div>
	);
}
