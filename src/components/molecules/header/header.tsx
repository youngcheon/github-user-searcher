import React from 'react';
import { usePathname } from 'next/navigation';
import { FaSearch, FaBookmark } from 'react-icons/fa';
import * as S from './styled';

const Header: React.FC = () => {
	const pathname = usePathname();

	return (
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
	);
};

export default Header;
