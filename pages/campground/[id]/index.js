import Link from 'next/link';
import { useRouter } from 'next/router';

import useSwr from 'swr';
import axios from 'axios';
import { useSession } from 'next-auth/client';

import NavigationBar from '../../../components/NavigationBar';
import ReviewForm from '../../../components/ReviewForm';

import styles from '../../../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

const campground = () => {
	const [session] = useSession();

	const router = useRouter();

	const handleDeleteCampground = (e) => {
		e.preventDefault();

		axios({
			method: 'delete',
			url: `/api/campground/${router.query.id}`,
		});
		router.push('/campgrounds');
	};

	const handleDeleteReview = (_id) => (e) => {
		e.preventDefault();

		axios({
			method: 'delete',
			url: `/api/campground/${router.query.id}/review/${_id}`,
			data: {
				_id: data.reviews._id,
				campground: data._id,
			},
		});

		router.reload();
	};

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data)
		return (
			<> {session && <div className={styles.container}>loading...</div>}</>
		);

	const { title, location, description, price, image, reviews, author } = data;

	return (
		<>
			{session && (
				<>
					<NavigationBar />
					<div className="container">
						<div className="row">
							<div className="col-sm-8">
								<div className="card mt-3 mb-3">
									<img
										src={image}
										class="card-img-top"
										alt="Card image cap"
										style={{ height: ' 40rem' }}
									/>
									<ul className="list-group">
										<li className="list-group-item">
											<div className="card-body">
												<div className="card-title h3">{title}</div>
												<div className="card-text">{description}</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="card-body">
												<div className="card-text">
													Created by: {author.name}
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="card-body">
												<div className="card-text text-muted">
													Location: {location}
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="card-body">
												<div className="card-text">Price: ${price}</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="card-body">
												{author.name && author.name === session.user.name ? (
													<>
														<Link
															href={`/campground/${[router.query.id]}/edit`}
															as={`/campground/${router.query.id}/edit`}>
															<button className="btn btn-dark">
																<a>Edit</a>
															</button>
														</Link>
														<form
															onSubmit={handleDeleteCampground}
															className="d-inline">
															<button className="btn btn-danger ms-2">
																<a>Delete</a>
															</button>
														</form>
													</>
												) : (
													<></>
												)}
											</div>
										</li>
									</ul>
									<div className="card-footer text-muted"> 2 days ago</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="mt-2">
									<ReviewForm className="mt-3" userId={session.id} />
								</div>
								{reviews.map(
									({ _id, rating, body, author: { name, email } }) => {
										return (
											<div key={_id}>
												<div className="card mt-3">
													<div className="card-body">
														<div className="card-title h6">
															<p
																class="starability-result"
																data-rating={rating}>
																Rating: {rating} stars
															</p>
														</div>
														<div className="card-text">{body}</div>
														<form
															onSubmit={handleDeleteReview(_id)}
															className="text-left">
															{name ||
															(email && name) ||
															email === session.user.name ? (
																<>
																	<button className="btn btn-danger btn-sm mt-3">
																		Delete
																	</button>
																</>
															) : (
																<></>
															)}
														</form>
													</div>
													<div className="card-footer text-muted">
														<small>by: {name || email}</small>
													</div>
												</div>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default campground;
