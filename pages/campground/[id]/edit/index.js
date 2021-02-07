import React, { useReducer } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';
import useSwr from 'swr';
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

import Layout from '../../../../components/layout';

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

const EditCampground = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const router = useRouter();

	const handleChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios({
			method: 'put',
			url: `/api/campground/${router.query.id}`,
			data: {
				_id: router.query.id,
				title,
				location,
				description,
				price,
				image,
			},
		});
		router.push('/campgrounds');
	};

	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	const { title, location, description, price, image } = state;
	return (
		<>
			<Row>
				<h1 className="text-center mb-3">Edit Campground</h1>
				<Col sm={{ size: 6, offset: 3 }}>
					<Form onSubmit={handleSubmit}>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="title"
								placeholder={`${data[0].title}`}
								value={title}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="location"
								placeholder={`${data[0].location}`}
								value={location}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="textarea"
								name="description"
								placeholder={`${data[0].description}`}
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
									placeholder={`${data[0].price}`}
									value={price}
									onChange={handleChange}
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="image"
								placeholder={`${data[0].image}`}
								value={image}
								onChange={handleChange}
							/>
						</FormGroup>
						<Button color="dark">Edit Campground</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

EditCampground.Layout = Layout;

export default EditCampground;
