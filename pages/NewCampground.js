import React, { useReducer } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import {
	Button,
	Row,
	Col,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
} from 'reactstrap';

import Layout from '../components/layout';
// import style from '../styles/newcampground.module.css';

const initialState = {
	title: '',
	location: '',
	description: '',
	price: '',
	image: '',
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}

const NewCampground = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const router = useRouter();

	const handleChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios({
			method: 'post',
			url: '/api/campgrounds',
			data: {
				title,
				location,
				description,
				price,
				image,
			},
		});
		router.push('/');
	};

	const { title, location, description, price, image } = state;

	return (
		<>
			<Row>
				<h1 className="text-center mb-3">New Campground</h1>
				<Col sm={{ size: 6, offset: 3 }}>
					<Form onSubmit={handleSubmit}>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="title"
								placeholder="Title"
								value={title}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="location"
								placeholder="Location"
								value={location}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="textarea"
								name="description"
								placeholder="Description"
								value={description}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup className="mb-3">
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<span className="input-group-text">$</span>
								</InputGroupAddon>
								<Input
									type="number"
									name="price"
									placeholder="Price"
									value={price}
									onChange={handleChange}
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="image"
								placeholder="Image"
								value={image}
								onChange={handleChange}
							/>
						</FormGroup>
						<Button color="dark">Add Campgrounds</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

NewCampground.Layout = Layout;

export default NewCampground;
