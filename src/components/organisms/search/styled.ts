import styled from 'styled-components';
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 584px;
	gap: 1px;
	flex-direction: column;
	justify-content: center;
	padding: 0 16px;

	@media (min-width: 768px) {
		width: 80%;
	}

	@media (min-width: 1024px) {
		width: 50%;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
