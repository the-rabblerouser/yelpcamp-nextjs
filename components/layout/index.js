import NavigationBar from '../Navbar';

export default function MyLayout({ children }) {
	return (
		<>
			<NavigationBar />
			{children}
		</>
	);
}
