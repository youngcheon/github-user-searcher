import { DefaultTheme, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme: DefaultTheme = {
	colors: {
		background: '#0d1117',
		foreground: '#c9d1d9',
		primary: '#58a6ff',
		secondary: '#8b949e',
		accent: '#3fb950',
		border: '#30363d',
		hover: '#161b22',
		text: '#8b949e',
	},
	fontSizes: {
		small: '0.875rem',
		medium: '1rem',
		large: '1.25rem',
		xLarge: '1.5rem',
		xxLarge: '2rem',
	},
};

export const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		background-color: ${theme.colors.background};
		color: ${theme.colors.foreground};
		font-size: ${theme.fontSizes.medium};       
	}
`;
