import NavigationBar from '../Navbar';
import Footer from '../Footer';

export default function MyLayout({ children }) {
	return (
		<>
			<NavigationBar />
			{children}
			<Footer />
		</>
	);
}
