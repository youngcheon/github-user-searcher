import React from 'react';
import List from '@/components/atoms/list/list';
import BookmarkButton from '@/components/atoms/button/bookmark-button';
import { useBookmarks } from '@/hooks';
import * as S from './styled';
import { Avatar } from '@/components/atoms/avatar';
import { LoadingIndicator } from '@/components/atoms/loading-indicator';

const BookmarksView: React.FC = () => {
	const { getBookmarkedUsers, removeBookmark, isLoading } = useBookmarks();
	const bookmarkedUsers = getBookmarkedUsers();

	if (isLoading) {
		return <LoadingIndicator />;
	}

	return (
		<S.Container>
			<S.Wrapper>
				<List>
					{bookmarkedUsers?.map((user) => (
						<List.Item key={user.id}>
							<S.UserInfo>
								<Avatar
									src={user.avatar_url}
									alt={user.login}
									width={32}
									height={32}
								/>
								<span>{user.login}</span>
							</S.UserInfo>

							<BookmarkButton
								isBookmarked={true}
								onClick={() => removeBookmark(user.id)}
							/>
						</List.Item>
					))}
				</List>
			</S.Wrapper>
		</S.Container>
	);
};

export default BookmarksView;
