import { useRouter } from 'next/router';

import axios from 'axios';

import { useForm } from 'react-hook-form';

import Layout from '../components/layout';
// import style from '../styles/newcampground.module.css';

const NewCampground = () => {
	const router = useRouter();

	const onSubmit = (data) => {
		axios({
			method: 'post',
			url: '/api/campgrounds',
			data,
		});
		router.push('/');
	};

	// Console.log data to see the object data that is being submitted from the form
	// console.log(data)

	const { register, handleSubmit, errors } = useForm();

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
		</>
	);
};

NewCampground.Layout = Layout;

export default NewCampground;
