import Link from 'next/link';
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
import { useSession } from 'next-auth/client';

import Layout from '../components/layout';

import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Campgrounds() {
	const [session] = useSession();

	const { data, error } = useSwr('/api/campgrounds', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div className={styles.container}>loading...</div>;

	return (
		<>
			{session && (
				<Layout>
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
												<Link
													href={`/campground/[$_id]`}
													as={`/campground/${_id}`}>
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
				</Layout>
			)}
		</>
	);
}

export default Campgrounds;
