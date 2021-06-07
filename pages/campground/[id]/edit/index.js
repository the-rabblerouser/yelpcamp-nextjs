import React from 'react';
import { useRouter } from 'next/router';

import useSwr from 'swr';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSession } from 'next-auth/client';

import NavigationBar from '../../../../components/NavigationBar';

const EditCampground = () => {
	const [session] = useSession();

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
	if (!data)
		return (
			<> {session && <div className={styles.container}>loading...</div>}</>
		);

	const { title, location, description, price, image } = data;
	return (
		<>
			{session && (
				<>
					<NavigationBar />
					<div className="container mt-5">
						<div className="row">
							<h1 className="text-center mb-5">Edit Campground</h1>
							<div className="col-md-6 offset-md-3">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="mb-3">
										<input
											type="text"
											name="title"
											defaultValue={`${title}`}
											className={`form-control ${
												errors.title ? 'is-invalid' : ''
											}`}
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
											defaultValue={`${location}`}
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
											defaultValue={`${description}`}
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
												defaultValue={`${price}`}
												className={`form-control ${
													errors.price ? 'is-invalid' : ''
												}`}
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
											defaultValue={`${image}`}
											className={`form-control ${
												errors.image ? 'is-invalid' : ''
											}`}
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
					</div>
				</>
			)}
		</>
	);
};

export default EditCampground;
