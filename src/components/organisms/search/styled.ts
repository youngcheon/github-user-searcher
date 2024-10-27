import styled from 'styled-components';
import Image from 'next/image';
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 50%;
	max-width: 584px;
	gap: 1px;
	flex-direction: column;
`;

export const Avatar = styled(Image)`
	border-radius: 9999px;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
