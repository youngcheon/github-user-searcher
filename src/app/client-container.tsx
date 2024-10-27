'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StyledComponentsRegistry from './registry';
import { GlobalStyle, theme } from '../style/theme';

const queryClient = new QueryClient();

interface ClientContainerProps {
	children: React.ReactNode;
}

const ClientContainer: React.FC<ClientContainerProps> = ({ children }) => (
	<StyledComponentsRegistry>
		<GlobalStyle />
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</QueryClientProvider>
	</StyledComponentsRegistry>
);

export default ClientContainer;
