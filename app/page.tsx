import Header from '@/components/Common/Header';
import HomeScreen from '@/components/Screen/HomeScreen';

export default function HomePage() {
	return (
		<>
			<Header />
			<main 
				className="w-full py-16 min-h-screen bg-backgroundV1"
			>
				<HomeScreen />
			</main>
		</>
	);
}


