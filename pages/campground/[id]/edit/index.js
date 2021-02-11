import React from 'react';
import { useRouter } from 'next/router';

import useSwr from 'swr';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Layout from '../../../../components/layout';

const EditCampground = () => {
	const router = useRouter();

	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		axios({
			method: 'put',
			url: `/api/campground/${router.query.id}`,
			data,
		});
		router.push('/campgrounds');
	};

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<>
			<div className="row">
				<h1 className="text-center mb-3">Edit Campground</h1>
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input
								type="text"
								name="title"
								placeholder={`${data[0].title}`}
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
								placeholder={`${data[0].location}`}
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
								placeholder={`${data[0].description}`}
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
									placeholder={`${data[0].price}`}
									className={`form-control ${errors.price ? 'is-invalid' : ''}`}
									ref={register({ required: true })}
								/>
							</div>
							<ErrorMessage
								className="invalid-feedback"
								errors={errors}
								name="price"
								as="div"
								message="*This is required"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="image"
								placeholder={`${data[0].image}`}
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
						<button className="btn btn-dark">Edit Campground</button>
					</form>
				</div>
			</div>
		</>
	);
};

EditCampground.Layout = Layout;

export default EditCampground;
