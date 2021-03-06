import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const ReviewForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<h2>Leave a Review</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					/>
					<ErrorMessage
						className="invalid-feedback"
						errors={errors}
						name="rating"
						as="div"
						message="*This is required"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="body">
						Review
					</label>
					<textarea
						id="body"
						name="review"
						rows="3"
						cols="30"
						className={`form-control ${errors.title ? 'is-invalid' : ''}`}
						ref={register({ required: true })}
					/>
					<ErrorMessage
						className="invalid-feedback"
						errors={errors}
						name="review"
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
