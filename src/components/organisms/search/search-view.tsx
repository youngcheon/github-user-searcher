import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from '@/components/atoms/input';
import List from '@/components/atoms/list/list';
import BookmarkButton from '@/components/atoms/button/bookmark-button';
import * as S from './styled';
import { useSearchUsersQuery } from '@/hooks';
import { useInView } from 'react-intersection-observer';

const SearchView: React.FC = () => {
	const [query, setQuery] = useState('');
	const { data, fetchNextPage, isFetchingNextPage } =
		useSearchUsersQuery(query);
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	return (
		<S.Container>
			<S.Wrapper>
				<Input value={query} onChange={handleInputChange} />
				<List>
					{data?.pages.flatMap((page) =>
						page.map((user) => (
							<List.Item key={user.id}>
								<S.UserInfo>
									<S.Avatar
										src={user.avatar_url}
										width={40}
										height={40}
										alt={user.login}
									/>
									<span>{user.login}</span>
								</S.UserInfo>
								<BookmarkButton isBookmarked={false} />
							</List.Item>
						)),
					)}
					{isFetchingNextPage ? <div /> : <div ref={ref} />}
				</List>
			</S.Wrapper>
		</S.Container>
	);
};

export default SearchView;
