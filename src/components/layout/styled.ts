'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Header = styled.header`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.hover};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoIcon = styled(FaGithub)`
	font-size: ${({ theme }) => theme.fontSizes.xxLarge};
	margin-right: 0.5rem;
`;

export const LogoText = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: bold;
`;

export const Content = styled.main`
	flex: 1;
	padding: 2rem;
`;

export const Footer = styled.footer`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.hover};
	text-align: center;
`;

export const NavList = styled.ul`
	display: flex;
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

export const NavItem = styled.li`
	margin-right: 1rem;

	&:last-child {
		margin-right: 0;
	}
`;

export const NavLink = styled(Link)<{ selected?: boolean }>`
	color: ${({ theme }) => theme.colors.text};
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	transition: background-color 0.3s ease;
	font-size: ${({ theme }) => theme.fontSizes.small};

	svg {
		margin-right: 0.5rem;
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.foreground}20;
	}

	${({ selected, theme }) =>
		selected &&
		`
		font-weight: bold;
		color: ${theme.colors.primary};
		background-color: ${theme.colors.foreground}10;
	`}
`;
