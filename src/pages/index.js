import useUrls from "@hooks/useUrls";
import Form from "@components/Form";
import { StyledLinkRow } from "@components/LinkRow/styles";
import LinkRow from "@components/LinkRow";
import { StyledLinkContainer, StyledMain } from "./_index.style";

export default function CustomPaginationActionsTable() {
	const { urls } = useUrls();

	return (
		<StyledMain>
			<Form />

			<StyledLinkContainer>
				{/* Headers */}
				<StyledLinkRow>
					<div>
						<h3>Full URL</h3>
					</div>
					<div>
						<h3>Shortened URL</h3>
					</div>
				</StyledLinkRow>

				{/* URL Rows */}
				{Object.entries(urls).map(([shortUrl, fullUrl]) => {
					return <LinkRow key={shortUrl} fullUrl={fullUrl} shortUrl={shortUrl} />;
				})}
			</StyledLinkContainer>
		</StyledMain>
	);
}
