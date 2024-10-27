import React from 'react';
import Input from '@/components/atoms/input';
import List from '@/components/atoms/list/list';
import BookmarkButton from '@/components/atoms/button/bookmark-button';
import * as S from './styled';

const SearchView: React.FC = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<Input value="" onChange={() => {}} />
				<List>
					<List.Item>
						Item 1
						<BookmarkButton isBookmarked={false} />
					</List.Item>
				</List>
			</S.Wrapper>
		</S.Container>
	);
};

export default SearchView;
