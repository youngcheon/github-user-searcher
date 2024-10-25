import ClientContainer from './client-container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Github User Search',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>
				<ClientContainer>{children}</ClientContainer>
			</body>
		</html>
	);
}
