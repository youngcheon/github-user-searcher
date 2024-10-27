import React, { useState, ChangeEvent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Input from '@/components/atoms/input';
import List from '@/components/atoms/list/list';
import BookmarkButton from '@/components/atoms/button/bookmark-button';
import { useBookmarks, useSearchUsersQuery } from '@/hooks';
import * as S from './styled';
import { LoadingIndicator } from '@/components/atoms/loading-indicator';
import { Avatar } from '@/components/atoms/avatar';

const SearchView: React.FC = () => {
	const [query, setQuery] = useState('');
	const { data, fetchNextPage, isFetchingNextPage } =
		useSearchUsersQuery(query);
	const { ref, inView } = useInView();
	const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleBookmarkToggle = (userId: number) => {
		if (isBookmarked(userId)) {
			removeBookmark(userId);
		} else {
			addBookmark(userId);
		}
	};

	return (
		<S.Container>
			<S.Wrapper>
				<Input value={query} onChange={handleInputChange} />

				<List>
					{data?.pages.flatMap((page) =>
						page.map((user) => (
							<React.Fragment key={user.id}>
								<List.Item>
									<S.UserInfo>
										<Avatar
											src={user.avatar_url}
											width={40}
											height={40}
											alt={user.login}
										/>
										<span>{user.login}</span>
									</S.UserInfo>
									<BookmarkButton
										isBookmarked={isBookmarked(user.id)}
										onClick={() => handleBookmarkToggle(user.id)}
									/>
								</List.Item>
							</React.Fragment>
						)),
					)}
					{isFetchingNextPage ? (
						<S.LoadingWrapper>
							<LoadingIndicator />
						</S.LoadingWrapper>
					) : (
						<div ref={ref} />
					)}
				</List>
			</S.Wrapper>
		</S.Container>
	);
};

export default SearchView;
