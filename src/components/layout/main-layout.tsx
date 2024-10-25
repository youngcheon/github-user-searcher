'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import * as S from './styled';
import { FaSearch, FaBookmark } from 'react-icons/fa';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const pathname = usePathname();

	return (
		<S.MainContainer>
			<S.Header>
				<S.Logo>
					<S.LogoIcon />
					<S.LogoText>Github User Search</S.LogoText>
				</S.Logo>
				<S.NavList>
					<S.NavItem>
						<S.NavLink href="/search" selected={pathname === '/search'}>
							<FaSearch /> 검색
						</S.NavLink>
					</S.NavItem>
					<S.NavItem>
						<S.NavLink href="/bookmarks" selected={pathname === '/bookmarks'}>
							<FaBookmark /> 북마크
						</S.NavLink>
					</S.NavItem>
				</S.NavList>
			</S.Header>
			<S.Content>{children}</S.Content>
		</S.MainContainer>
	);
};

export default MainLayout;
