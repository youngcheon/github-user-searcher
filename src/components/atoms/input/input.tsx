import React from 'react';
import * as S from './styled';

interface InputProps {
	placeholder?: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
	placeholder = '검색...',
	value,
	onChange,
}) => {
	return (
		<S.StyledInput
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
