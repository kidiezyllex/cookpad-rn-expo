import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'CookPad Web',
	description: 'Migrated to Next.js + TailwindCSS',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="vi">
			<body className="min-h-dvh bg-white text-gray-900 antialiased">{children}</body>
		</html>
	);
}


