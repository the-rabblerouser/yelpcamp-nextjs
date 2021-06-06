import { useRouter } from 'next/router';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Layout from '../components/layout';

// import style from '../styles/newcampground.module.css';

const NewCampground = () => {
	const router = useRouter();

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		axios({
			method: 'post',
			url: '/api/campgrounds',
			data,
		});
		router.push('/campgrounds');
	};

	return (
		<>
			<Layout>
				<div className="row">
					<h1 className="text-center mb-3">New Campground</h1>
					<div className="col-md-6 offset-md-3">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<input
									type="text"
									name="title"
									placeholder="Title"
									className={`form-control ${errors.title ? 'is-invalid' : ''}`}
									ref={register({ required: true })}
								/>
								<ErrorMessage
									className="invalid-feedback"
									errors={errors}
									name="title"
									as="div"
									message="*This is required"
								/>
							</div>
							<div className="mb-3">
								<input
									name="location"
									className={`form-control ${
										errors.location ? 'is-invalid' : ''
									}`}
									type="text"
									placeholder="Location"
									ref={register({ required: true })}
								/>
								<ErrorMessage
									className="invalid-feedback"
									errors={errors}
									name="location"
									as="div"
									message="*This is required"
								/>
							</div>
							<div className="mb-3">
								<input
									type="textarea"
									name="description"
									placeholder="Description"
									className={`form-control ${
										errors.description ? 'is-invalid' : ''
									}`}
									ref={register({ required: true })}
								/>
								<ErrorMessage
									className="invalid-feedback"
									errors={errors}
									name="description"
									as="div"
									message="*This is required"
								/>
							</div>
							<div className="mb-3">
								<div className="input-group">
									<span className="input-group-text">$</span>
									<input
										type="number"
										name="price"
										placeholder="Price"
										className={`form-control ${
											errors.price ? 'is-invalid' : ''
										}`}
										ref={register({ required: true })}
									/>
									<ErrorMessage
										className="invalid-feedback"
										errors={errors}
										name="price"
										as="div"
										message="*This is required"
									/>
								</div>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="image"
									placeholder="Image"
									className={`form-control ${errors.image ? 'is-invalid' : ''}`}
									ref={register({ required: true })}
								/>
								<ErrorMessage
									className="invalid-feedback"
									errors={errors}
									name="image"
									as="div"
									message="*This is required"
								/>
							</div>
							<button className="btn btn-dark">Add Campground</button>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default NewCampground;
