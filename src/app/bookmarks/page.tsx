'use client';

import React from 'react';
import { MainLayout } from '@/components/templates/layout';
import BookmarksView from '@/components/organisms/bookmarks/bookmarks-view';

const BookmarkPage: React.FC = () => {
	return (
		<MainLayout>
			<BookmarksView />
		</MainLayout>
	);
};

export default BookmarkPage;
