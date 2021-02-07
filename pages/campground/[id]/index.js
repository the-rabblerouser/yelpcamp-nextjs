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
} from 'reactstrap';

import Layout from '../../../components/layout';
import styles from '../../../styles/campground.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

const campground = () => {
	const router = useRouter();

	const handleDelete = (e) => {
		e.preventDefault();

		axios({
			method: 'delete',
			url: `/api/campground/${router.query.id}`,
			data: {
				_id: router.query.id,
				location: data[0].location,
				title: data[0].title,
			},
		});
		router.push('/campgrounds');
	};

	const { data, error } = useSwr(
		router.query.id ? `/api/campground/${router.query.id}` : null,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	const { title, location, description, price, image } = data[0];
	return (
		<>
			<Row>
				<Col sm={{ size: 6, offset: 3 }}>
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
									<CardText className="text-muted">{location}</CardText>
								</CardBody>
							</ListGroupItem>
							<ListGroupItem>
								<CardBody>
									<CardText>Price: ${price}</CardText>
								</CardBody>
							</ListGroupItem>
							<ListGroupItem>
								<CardBody>
									<Link
										href={`/campground/${[router.query.id]}/edit`}
										as={`/campground/${router.query.id}/edit`}>
										<Button color="dark">
											<a>Edit</a>
										</Button>
									</Link>
									<Form onSubmit={handleDelete} className="d-inline">
										<Button className="ms-2" color="dark">
											<a>Delete</a>
										</Button>
									</Form>
								</CardBody>
							</ListGroupItem>
						</ListGroup>
						<CardFooter className="text-muted"> 2 days ago</CardFooter>
					</Card>
				</Col>
			</Row>
		</>
	);
};

campground.Layout = Layout;

export default campground;
