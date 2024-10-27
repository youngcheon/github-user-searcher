import styled from 'styled-components';
import { theme } from '@/style/theme';

export const Button = styled.button<{ $isBookmarked: boolean }>`
	background: none;
	border: none;
	cursor: pointer;
	color: ${(props) =>
		props.$isBookmarked ? theme.colors.primary : theme.colors.text};
	font-size: ${theme.fontSizes.medium};
	transition: color 0.3s ease;

	&:hover {
		color: ${theme.colors.primary};
	}
`;
