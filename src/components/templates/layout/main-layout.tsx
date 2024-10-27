'use client';

import React from 'react';
import * as S from './styled';
import Header from '@/components/molecules/header';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<S.MainContainer>
			<Header />
			<S.Content>{children}</S.Content>
		</S.MainContainer>
	);
};

export default MainLayout;
