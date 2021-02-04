import React, { useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';
import useSwr from 'swr';

const Edit = () => {
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');

	const handleNameChange = (e) => {
		return setTitle(e.target.value);
	};

	const handleLocationChange = (e) => {
		return setLocation(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title && !location) {
			return alert('You must enter a new title and location');
		}
		axios({
			method: 'put',
			url: `/api/campground/${router.query.id}`,
			data: {
				_id: router.query.id,
				location: location,
				title: title,
			},
		});
		setTitle('');
		setLocation('');
		router.push('/campgrounds');
	};

	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="Title"
						placeholder={`${data[0].title}`}
						value={title}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<input
						type="text"
						name="Location"
						placeholder={`${data[0].location}`}
						value={location}
						onChange={handleLocationChange}
					/>
				</div>
				<div>
					<button>Edit Campground</button>
				</div>
			</form>
		</div>
	);
};

export default Edit;
