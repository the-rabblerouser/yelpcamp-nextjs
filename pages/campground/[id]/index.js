import Link from 'next/link';

import styles from '../../../styles/campground.module.css';

import { useRouter } from 'next/router';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const campground = () => {
	const router = useRouter();

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<div>
				<Link href="/campgrounds">
					<a>
						<h1>{data[0].title}</h1>
					</a>
				</Link>
			</div>
			<div>
				<h2>{data[0].location}</h2>
			</div>
			<div>
				<button>
					<Link
						href={`/campground/${[router.query.id]}/edit`}
						as={`/campground/${router.query.id}/edit`}>
						<a>Edit</a>
					</Link>
				</button>
			</div>
		</>
	);
};

export default campground;
