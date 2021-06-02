import NavigationBar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
	return (
		<>
			<div className="d-flex flex-column vh-100">
				<NavigationBar />
				{children}
				<Footer />
			</div>
		</>
	);
}
