import styles from '../styles/campgrounds.module.css';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Campgrounds() {
	const { data, error } = useSWR('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	console.log(data);
	return (
		<div>
			<h1>{data[0].title}</h1>
			{data.map(({ title }) => {
				return (
					<ul>
						<li className={styles.listItem}>{title}</li>
					</ul>
				);
			})}
		</div>
	);
}
