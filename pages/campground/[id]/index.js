import Link from 'next/link';
import { useRouter } from 'next/router';

import useSwr from 'swr';
import axios from 'axios';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Form,
	CardFooter,
	Container,
} from 'reactstrap';
import { useSession } from 'next-auth/client';

import NavigationBar from '../../../components/NavigationBar';
import ReviewForm from '../../../components/ReviewForm';

import styles from '../../../styles/campground.module.css';

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
					<Container>
						<Row>
							<Col sm={{ size: 8 }}>
								<Card className="mt-3 mb-3">
									<CardImg
										top
										width="100%"
										src={image}
										alt="Card image cap"
										className="image-fluid"
									/>
									<ListGroup>
										<ListGroupItem>
											<CardBody>
												<CardTitle tag="h5">{title}</CardTitle>
												<CardText>{description}</CardText>
											</CardBody>
										</ListGroupItem>
										<ListGroupItem>
											<CardBody>
												<CardText>Created by: {author.name}</CardText>
											</CardBody>
										</ListGroupItem>
										<ListGroupItem>
											<CardBody>
												<CardText className="text-muted">
													Location: {location}
												</CardText>
											</CardBody>
										</ListGroupItem>
										<ListGroupItem>
											<CardBody>
												<CardText>Price: ${price}</CardText>
											</CardBody>
										</ListGroupItem>
										<ListGroupItem>
											<CardBody>
												{author.name && author.name === session.user.name ? (
													<>
														<Link
															href={`/campground/${[router.query.id]}/edit`}
															as={`/campground/${router.query.id}/edit`}>
															<Button color="dark">
																<a>Edit</a>
															</Button>
														</Link>
														<Form
															onSubmit={handleDeleteCampground}
															className="d-inline">
															<Button className="ms-2" color="danger">
																<a>Delete</a>
															</Button>
														</Form>
													</>
												) : (
													<></>
												)}
											</CardBody>
										</ListGroupItem>
									</ListGroup>
									<CardFooter className="text-muted"> 2 days ago</CardFooter>
								</Card>
							</Col>
							<Col sm={{ size: 4 }}>
								<div className="mt-2">
									<ReviewForm className="mt-3" />
								</div>
								{reviews.map(({ _id, rating, body }) => {
									return (
										<div key={_id}>
											<Card className="mt-3">
												<CardBody>
													<CardTitle tag="h5">Rating: {rating}</CardTitle>
													<CardText>{body}</CardText>
													<Form
														onSubmit={handleDeleteReview(_id)}
														className="d-inline">
														{author.name &&
														author.name === session.user.name ? (
															<>
																<Button
																	className="ms-2"
																	color="danger"
																	size="sm">
																	Delete
																</Button>
															</>
														) : (
															<></>
														)}
													</Form>
												</CardBody>
											</Card>
										</div>
									);
								})}
							</Col>
						</Row>
					</Container>
				</>
			)}
		</>
	);
};

export default campground;
