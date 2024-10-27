import { useQueries } from '@tanstack/react-query';
import { useBookmarkStore } from '@/store/store';
import GithubApi from '@/data/api/github-api';
import { useCallback } from 'react';

const useBookmarks = () => {
	const bookmarkIds = useBookmarkStore((state) => state.bookmarks);
	const addBookmarkStore = useBookmarkStore((state) => state.addBookmark);
	const removeBookmarkStore = useBookmarkStore((state) => state.removeBookmark);

	const api = new GithubApi();

	const bookmarkedUsersQueries = useQueries({
		queries: bookmarkIds.map((bookmark) => ({
			queryKey: ['user', bookmark.id],
			queryFn: () => api.getUserById(bookmark.id),
			staleTime: 60 * 60 * 1000,
		})),
	});

	const addBookmark = useCallback(
		(userId: number) => {
			addBookmarkStore(userId);
		},
		[addBookmarkStore],
	);

	const removeBookmark = useCallback(
		(bookmarkId: number) => {
			removeBookmarkStore(bookmarkId);
		},
		[removeBookmarkStore],
	);

	const isBookmarked = useCallback(
		(bookmarkId: number) => {
			return bookmarkIds.some((bookmark) => bookmark.id === bookmarkId);
		},
		[bookmarkIds],
	);

	const getBookmarkedUsers = useCallback(() => {
		return bookmarkedUsersQueries
			.filter((query) => query.isSuccess)
			.map((query) => query.data);
	}, [bookmarkedUsersQueries]);

	const isLoading = bookmarkedUsersQueries.some((query) => query.isLoading);

	return {
		getBookmarkedUsers,
		addBookmark,
		removeBookmark,
		isBookmarked,
		isLoading,
	};
};

export default useBookmarks;
