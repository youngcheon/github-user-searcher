import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Bookmark } from './types';

interface BookmarkStore {
	bookmarks: Bookmark[];
	addBookmark: (userId: number) => void;
	removeBookmark: (userId: number) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
	persist(
		(set) => ({
			bookmarks: [],
			addBookmark: (userId) =>
				set((state) => ({
					bookmarks: [...state.bookmarks, { id: userId }],
				})),
			removeBookmark: (userId) =>
				set((state) => ({
					bookmarks: state.bookmarks.filter(
						(bookmark) => bookmark.id !== userId,
					),
				})),
		}),
		{
			name: 'bookmark-storage',
		},
	),
);
