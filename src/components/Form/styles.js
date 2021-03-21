import styled from "styled-components";

export const StyledForm = styled.form`
	width: 100%;
	display: grid;
	gap: 2rem;
	justify-content: stretch;
	text-align: center;

	svg {
		width: 50%;
		height: auto;
		margin: 0 auto;
	}
`;

export const StyledInput = styled.div`
	align-self: stretch;
	width: 100%;
	display: flex;

	input {
		padding: 1rem 2rem;
		border-radius: 6px;
		flex: 1;
		margin-right: 2rem;
		border: 2px solid ${({ theme }) => theme.colors.highlight};
		transition: ${({ theme }) => theme.transitions.normal};
		&:focus {
			transform: scale(1.025);
		}
	}

	button {
		padding: 1rem 3rem;
		background: ${({ theme }) => theme.colors.highlight};
		color: #fff;
		border-radius: 5px;
	}
`;
