import { useRouter } from 'next/router';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

// import style from '../styles/review.module.css';

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
					<input
						className="form-range"
						type="range"
						min="1"
						max="5"
						name="rating"
						id="rating"
						ref={register({ required: true })}
					/>
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
