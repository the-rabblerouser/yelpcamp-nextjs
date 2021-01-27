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
			<h1>{data[0].title}</h1>
			<h2>{data[0].location}</h2>
		</>
	);
};

export default campground;
