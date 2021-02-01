import React, { useState, useEffect } from 'react';

const NewCampground = () => {
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');

	const handleNameChange = (e) => {
		return setTitle(e.target.value);
	};

	const handleLocationChange = (e) => {
		return setLocation(e.target.value);
	};

	const handleSubmit = () => {
		let dataBody = {
			location,
			title,
		};
		return fetch('/api/campgrounds', {
			method: 'POST',
			body: JSON.stringify(dataBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<form>
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
					<button onSubmit={handleSubmit}>Add Campground</button>
				</div>
			</form>
		</div>
	);
};

export default NewCampground;
