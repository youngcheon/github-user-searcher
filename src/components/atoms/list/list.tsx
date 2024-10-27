import React from 'react';
import * as S from './styled';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	children: React.ReactNode;
}

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
	children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children, ...props }) => (
	<S.Li {...props}>{children}</S.Li>
);

const ListComponent: React.FC<ListProps> = ({ children, ...props }) => (
	<S.Ul {...props}>{children}</S.Ul>
);

const List = Object.assign(ListComponent, { Item: ListItem });

export default List;
