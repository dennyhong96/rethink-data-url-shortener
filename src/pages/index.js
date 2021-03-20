import Link from "next/link";

import useUrls from "@hooks/useUrls";
import styled from "styled-components";
import { Graphic, IconCopy } from "@components/icons";
import handleCopy from "@utils/handleCopy";
import { toast } from "react-toastify";
import { useCallback } from "react";

const StyledMain = styled.main`
	width: 90%;
	max-width: 800px;
	margin: 5rem auto;
	background-color: #fff;
	padding: 5rem;
	border-radius: 2rem;
	display: grid;
	gap: 3rem;
`;

const StyledForm = styled.form`
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

const StyledInput = styled.div`
	align-self: stretch;
	width: 100%;
	display: flex;

	input {
		padding: 1rem 2rem;
		border-radius: 6px;
		flex: 1;
		margin-right: 2rem;
		border: 2px solid ${({ theme }) => theme.colors.highlight};
	}

	button {
		padding: 1rem 3rem;
		background: ${({ theme }) => theme.colors.highlight};
		color: #fff;
		border-radius: 5px;
	}
`;

const StyledLinks = styled.div`
	align-self: stretch;
	width: 100%;
	display: grid;
	gap: 1rem;
`;

const StyledLinkRow = styled.div`
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

export default function CustomPaginationActionsTable() {
	const { urls, handleChange, handleSubmit, urlInput } = useUrls();

	const copy = useCallback(shortUrl => {
		handleCopy(shortUrl);
		toast("Short URL has been copied to your clip board.");
	}, []);

	return (
		<StyledMain>
			<StyledForm onSubmit={handleSubmit}>
				<Graphic />
				<h1>Shorten Any Links</h1>
				<StyledInput>
					<input value={urlInput} onChange={handleChange} />
					<button type="submit">Shorten</button>
				</StyledInput>
			</StyledForm>

			<StyledLinks>
				<StyledLinkRow>
					<div>
						<h3>Full URL</h3>
					</div>
					<div>
						<h3>Shortened URL</h3>
					</div>
				</StyledLinkRow>

				{Object.entries(urls).map(([shortUrl, fullUrl]) => {
					return (
						<StyledLinkRow key={shortUrl}>
							<div>
								<a href={fullUrl} target="_blank" rel="noreferrer noopener">
									{fullUrl}
								</a>
							</div>
							<div>
								<Link href={shortUrl} passHref>
									<a target="_blank" rel="noreferrer noopener">
										{shortUrl}
									</a>
								</Link>
								<button onClick={copy.bind(this, shortUrl)}>
									<IconCopy />
								</button>
							</div>
						</StyledLinkRow>
					);
				})}
			</StyledLinks>
		</StyledMain>
	);
}
