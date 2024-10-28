import React from 'react';
import * as S from './styled';

const LoadingIndicator: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Spinner />
		</S.Wrapper>
	);
};

export default LoadingIndicator;
