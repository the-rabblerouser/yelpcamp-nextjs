import React, { useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import Layout from '../components/layout';
import { Button } from 'reactstrap';

const NewCampground = () => {
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

		axios({
			method: 'post',
			url: '/api/campgrounds',
			data: {
				location: location,
				title: title,
			},
		});
		setTitle('');
		setLocation('');
		router.push('/');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="Title"
						placeholder="Title"
						value={title}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<input
						type="text"
						name="Location"
						placeholder="Location"
						value={location}
						onChange={handleLocationChange}
					/>
				</div>
				<div>
					<Button color="danger">Add Campgrounds</Button>
				</div>
			</form>
		</div>
	);
};

NewCampground.Layout = Layout;

export default NewCampground;
