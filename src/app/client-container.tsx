'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import { GlobalStyle, theme } from '../style/theme';

interface ClientContainerProps {
	children: React.ReactNode;
}

const ClientContainer: React.FC<ClientContainerProps> = ({ children }) => (
	<StyledComponentsRegistry>
		<GlobalStyle />
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</StyledComponentsRegistry>
);

export default ClientContainer;
