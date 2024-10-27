'use client';

import React from 'react';
import { MainLayout } from '@/components/templates/layout';
import SearchView from '@/components/organisms/search/search-view';

const SearchPage: React.FC = () => {
	return (
		<MainLayout>
			<SearchView />
		</MainLayout>
	);
};

export default SearchPage;
