import Link from 'next/link';
import styles from '../styles/campgrounds.module.css';
import Layout from '../components/layout';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col,
} from 'reactstrap';

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Campgrounds() {
	const { data, error } = useSwr('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<>
			<h1>Campgrounds</h1>
			{data.map(({ _id, title, image, description, location }) => {
				return (
					<div key={_id}>
						<Card className="mb-3">
							<Row>
								<Col md="4">
									<CardImg
										className="image-fluid"
										width="100%"
										src={image}
										alt="Card image cap"
									/>
								</Col>
								<Col md="8">
									<CardBody>
										<CardTitle tag="h5">{title}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"></CardSubtitle>
										<CardText>{description}</CardText>
										<CardSubtitle className="mb-4 text-muted">
											{location}
										</CardSubtitle>
										<Link href={`/campground/[$_id]`} as={`/campground/${_id}`}>
											<Button>
												<a>View {title}</a>
											</Button>
										</Link>
									</CardBody>
								</Col>
							</Row>
						</Card>
					</div>
				);
			})}
		</>
	);
}

Campgrounds.Layout = Layout;

export default Campgrounds;
