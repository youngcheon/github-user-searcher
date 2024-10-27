import styled from 'styled-components';
import { theme } from '@/style/theme';

export const Ul = styled.ul`
	flex: 1;
`;

export const Li = styled.li`
	padding: 20px;
	border: 1px solid ${theme.colors.border};
	border-radius: 5px;
	border-bottom: 1px solid ${theme.colors.border};
	background-color: ${theme.colors.background};
	display: flex;
	justify-content: space-between;

	&:hover {
		background-color: ${theme.colors.hover};
	}
`;
