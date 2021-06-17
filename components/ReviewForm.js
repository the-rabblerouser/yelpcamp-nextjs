import { useRouter } from 'next/router';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const ReviewForm = ({ userId }) => {
	const router = useRouter();
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, userId) => {
		Object.assign(data, { author: userId });

		axios({
			method: 'post',
			url: `/api/campground/${router.query.id}/review`,
			data,
		});

		router.reload();
	};

	return (
		<>
			<h2>Leave a Review</h2>
			<form onSubmit={handleSubmit((data) => onSubmit(data, userId))}>
				<div className="mb-3">
					<label className="form-label" htmlFor="rating">
						Rating
					</label>
					<fieldset className="starability-basic" name="rating" id="rating">
						<legend>First rating:</legend>
						<input
							type="radio"
							id="no-rate"
							className="input-no-rate"
							name="rating"
							value="0"
							aria-label="No rating."
							ref={register({ required: true })}
						/>
						<input
							type="radio"
							id="first-rate1"
							name="rating"
							value="1"
							ref={register({ required: true })}
						/>
						<label htmlFor="first-rate1" title="Terrible">
							1 star
						</label>
						<input
							type="radio"
							id="first-rate2"
							name="rating"
							value="2"
							ref={register({ required: true })}
						/>
						<label htmlFor="first-rate2" title="Not good">
							2 stars
						</label>
						<input
							type="radio"
							id="first-rate3"
							name="rating"
							value="3"
							ref={register({ required: true })}
						/>
						<label htmlFor="first-rate3" title="Average">
							3 stars
						</label>
						<input
							type="radio"
							id="first-rate4"
							name="rating"
							value="4"
							ref={register({ required: true })}
						/>
						<label htmlFor="first-rate4" title="Very good">
							4 stars
						</label>
						<input
							type="radio"
							id="first-rate5"
							name="rating"
							value="5"
							ref={register({ required: true })}
						/>
						<label htmlFor="first-rate5" title="Amazing">
							5 stars
						</label>
					</fieldset>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="body">
						Review
					</label>
					<textarea
						id="body"
						name="body"
						rows="3"
						cols="30"
						className={`form-control ${errors.body ? 'is-invalid' : ''}`}
						ref={register({ required: true })}
					/>
					<ErrorMessage
						className="invalid-feedback"
						errors={errors}
						name="body"
						as="div"
						message="*This is required"
					/>
				</div>
				<button className="btn btn-dark mb-2">Submit</button>
			</form>
		</>
	);
};

export default ReviewForm;
