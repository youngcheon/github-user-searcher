import styled from 'styled-components';
import { theme } from '@/style/theme';

export const StyledInput = styled.input`
	flex: 1;
	padding: 20px;
	font-size: ${theme.fontSizes.large};
	color: ${theme.colors.foreground};
	background-color: ${theme.colors.background};
	border: 1px solid ${theme.colors.border};
	border-radius: 5px;
	outline: none;
	box-shadow: none;
	transition: all 0.15s ease-in-out;

	&:focus {
		border-color: ${theme.colors.primary};
		box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
	}

	&::placeholder {
		color: ${theme.colors.text};
	}
`;
