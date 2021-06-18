import Link from 'next/link';

import useSwr from 'swr';
import { useSession } from 'next-auth/client';

import NavigationBar from '../components/NavigationBar';

import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Campgrounds() {
	const [session] = useSession();

	const { data, error } = useSwr('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data)
		return (
			<> {session && <div className={styles.container}>loading...</div>}</>
		);

	return (
		<>
			{session && (
				<>
					<NavigationBar />
					<div className="container">
						<h1>Campgrounds</h1>
						{data.map(({ _id, title, image, description, location }) => {
							return (
								<div key={_id}>
									<div className="card mb-3">
										<div className="row">
											<div className="col">
												<img
													className="card-img-top"
													src={image}
													alt="Card image cap"
													style={{ height: '25rem' }}
												/>
											</div>
											<div className="col">
												<div className="card-body">
													<div className="card-title h3">{title}</div>
													<div className="card-subtitle mt-2 h6 text-muted"></div>
													<div className="card-text mb-3">{description}</div>
													<div className="card-subtitle mb-4 text-muted">
														{location}
													</div>
													<Link
														href={`/campground/[$_id]`}
														as={`/campground/${_id}`}>
														<button className="btn btn-secondary">
															<a>View {title}</a>
														</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</>
	);
}

export default Campgrounds;
