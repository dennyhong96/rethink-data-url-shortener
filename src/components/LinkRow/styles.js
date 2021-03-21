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

		button {
			background: ${({ theme }) => theme.colors.highlight};
			color: #fff;
			display: block;
			padding: 0.5rem;
			border-radius: 6px;

			svg {
				height: 2rem;
				width: 2rem;
			}
		}
	}
`;
