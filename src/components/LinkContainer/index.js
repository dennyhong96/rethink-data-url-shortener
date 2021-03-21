import PropTypes from "prop-types";

import { StyledLinkRow } from "@components/LinkRow/styles";
import LinkRow from "@components/LinkRow";
import { StyledLinkContainer } from "./styles";
import { containerVariants } from "./motions";

const LinkContainer = ({ urls, handleDelete }) => {
	return Object.entries(urls).length ? (
		<StyledLinkContainer variants={containerVariants} initial="hidden" animate="show" exit="exit">
			{/* Headers */}
			<StyledLinkRow key={`header`}>
				<div>
					<h3>Full URL</h3>
				</div>
				<div>
					<h3>Shortened URL</h3>
				</div>
			</StyledLinkRow>

			{/* URL Rows */}
			{Object.entries(urls).map(([shortUrl, fullUrl]) => {
				return (
					<LinkRow
						key={shortUrl}
						fullUrl={fullUrl}
						shortUrl={shortUrl}
						handleDelete={handleDelete}
					/>
				);
			})}
		</StyledLinkContainer>
	) : null;
};

export default LinkContainer;

LinkContainer.propTypes = {
	urls: PropTypes.object,
	handleDelete: PropTypes.func,
};
