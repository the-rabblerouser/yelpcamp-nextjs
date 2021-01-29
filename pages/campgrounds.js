import Link from 'next/link';
import styles from '../styles/campgrounds.module.css';

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Campgrounds() {
	const { data, error } = useSwr('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<div>
			<div>
				<Link href="/">
					<a>
						<h1>{data[0].title} Campgrounds</h1>
					</a>
				</Link>
			</div>
			{data.map(({ _id, title }) => {
				return (
					<ul key={_id}>
						<li className={styles.listItem}>
							<Link href={`/campground/[$_id]`} as={`/campground/${_id}`}>
								<a>{title}</a>
							</Link>
						</li>
					</ul>
				);
			})}
		</div>
	);
}
