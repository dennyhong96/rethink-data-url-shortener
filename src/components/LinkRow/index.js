import Link from "next/link";
import { useCallback } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { IconCopy, IconDelete } from "@components/icons";
import handleCopy from "@utils/handleCopy";
import { StyledLinkRow } from "./styles";
import { itemMotions } from "./motions";

const LinkRow = ({ shortUrl, fullUrl, handleDelete }) => {
	const copy = useCallback(shortUrl => {
		handleCopy(shortUrl);
		toast("Short URL has been copied to your clip board.");
	}, []);

	return (
		<StyledLinkRow {...itemMotions}>
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
				<div>
					<button onClick={copy.bind(this, shortUrl)}>
						<IconCopy />
					</button>
					<button onClick={() => handleDelete({ shortUrl })}>
						<IconDelete />
					</button>
				</div>
			</div>
		</StyledLinkRow>
	);
};

export default LinkRow;

LinkRow.propTypes = {
	shortUrl: PropTypes.string,
	fullUrl: PropTypes.string,
	handleDelete: PropTypes.func,
};
