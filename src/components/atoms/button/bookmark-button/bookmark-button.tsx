import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import * as S from './styled';

interface BookmarkButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isBookmarked: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
	isBookmarked,
	...props
}) => {
	return (
		<S.Button $isBookmarked={isBookmarked} {...props}>
			<FaBookmark />
		</S.Button>
	);
};

export default BookmarkButton;
