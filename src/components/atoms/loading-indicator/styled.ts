import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	border: 4px solid ${({ theme }) => theme.colors.background};
	border-top: 4px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	animation: ${spin} 1s linear infinite;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;
