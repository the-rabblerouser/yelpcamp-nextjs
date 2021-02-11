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
import { useForm, Controller } from 'react-hook-form';

import Layout from '../components/layout';
// import style from '../styles/newcampground.module.css';

// const initialState = {
// 	title: '',
// 	location: '',
// 	description: '',
// 	price: '',
// 	image: '',
// };

// function reducer(state, { field, value }) {
// 	return {
// 		...state,
// 		[field]: value,
// 	};
// }

const NewCampground = () => {
	// const [state, dispatch] = useReducer(reducer, initialState);

	const router = useRouter();

	// const handleChange = (e) => {
	// 	dispatch({ field: e.target.name, value: e.target.value });
	// };

	const onSubmit = (data) => {
		axios({
			method: 'post',
			url: '/api/campgrounds',
			data,
		});
		router.push('/');
	};

	// const { title, location, description, price, image } = state;

	const { register, handleSubmit, errors } = useForm();
	// const onSubmit = (data) => console.log(data);

	return (
		<>
			<div className="row">
				<h1 className="text-center mb-3">New Campground</h1>
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input
								type="text"
								name="title"
								placeholder="Title"
								className="form-control"
								ref={register({ required: true })}
							/>
							{errors.title && '*Title is required'}
						</div>
						<div className="mb-3">
							<input
								name="location"
								className="form-control"
								type="text"
								placeholder="Location"
								ref={register({ required: true })}
							/>
							{errors.location && '*Location is required'}
						</div>
						<div className="mb-3">
							<input
								type="textarea"
								name="description"
								placeholder="Description"
								className="form-control"
								ref={register({ required: true })}
							/>
							{errors.description && '*Description is required'}
						</div>
						<div className="mb-3">
							<div className="input-group">
								<span className="input-group-text">$</span>
								<input
									type="number"
									name="price"
									placeholder="Price"
									className="form-control"
									ref={register({ required: true })}
								/>
							</div>
							{errors.price && '* Price is required'}
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="image"
								placeholder="Image"
								className="form-control"
								ref={register({ required: true })}
							/>
							{errors.image && '*Image URL is required'}
						</div>
						<button className="btn btn-dark">Add Campground</button>
					</form>
				</div>
			</div>
			{/* <Row>
				<h1 className="text-center mb-3">New Campground</h1>
				<Col sm={{ size: 6, offset: 3 }}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup className="mb-3">
							<Input
								type="text"
								name="title"
								placeholder="Title"
								ref={register({ required: true })}
							/>
							{errors.title && 'Title is required'}
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
			</Row> */}
		</>
	);
};

NewCampground.Layout = Layout;

export default NewCampground;
