import { useRouter } from 'next/router';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Layout from '../components/layout';

const Register = () => {
	const router = useRouter();

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		axios({
			method: 'post',
			url: '/api/users',
			data,
		});
		router.push('/');
	};

	return (
		<>
			<div className="row">
				<h1 className="text-center mb-3 mt-4">Sign Up</h1>
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input
								type="text"
								name="email"
								placeholder="Email"
								className={`form-control ${errors.email ? 'is-invalid' : ''}`}
								ref={register({ required: true })}
							/>
							<ErrorMessage
								className="invalid-feedback"
								errors={errors}
								name="email"
								as="div"
								message="*This is required"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="username"
								placeholder="Username"
								className={`form-control ${
									errors.username ? 'is-invalid' : ''
								}`}
								ref={register({ required: true })}
							/>
							<ErrorMessage
								className="invalid-feedback"
								errors={errors}
								name="username"
								as="div"
								message="*This is required"
							/>
						</div>
						<div className="mb-3">
							<input
								name="password"
								className={`form-control ${
									errors.password ? 'is-invalid' : ''
								}`}
								type="password"
								placeholder="Password"
								ref={register({ required: true })}
							/>
							<ErrorMessage
								className="invalid-feedback"
								errors={errors}
								name="password"
								as="div"
								message="*This is required"
							/>
						</div>
						<button className="btn btn-dark">Sign Up</button>
					</form>
				</div>
			</div>
		</>
	);
};

Register.Layout = Layout;

export default Register;
