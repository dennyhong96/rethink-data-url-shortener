import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLinkRow = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	a {
		word-break: break-all;
	}

	h3 {
		font-size: 2rem;
		font-weight: 500;
	}

	& > div:last-of-type {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			display: flex;
			align-items: center;

			button {
				background: ${({ theme }) => theme.colors.highlight};
				color: #fff;
				display: block;
				padding: 0.75rem;
				padding-bottom: 0.8rem;
				border-radius: 6px;
				display: grid;
				place-content: center;

				svg {
					height: 2rem;
					width: 2rem;
				}

				&:last-of-type {
					margin-left: 0.5rem;
					background: ${({ theme }) => theme.colors.highlight2};
				}
			}
		}
	}
`;
