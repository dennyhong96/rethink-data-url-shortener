import useUrls from "@hooks/useUrls";
import Form from "@components/Form";
import LinkContainer from "@components/LinkContainer";

import { StyledMain } from "./_index.style";
import { mainMotions } from "./_index.motion";

export default function CustomPaginationActionsTable() {
	const { urls, urlInput, handleChange, handleSubmit, handleDelete } = useUrls();

	return (
		<StyledMain {...mainMotions}>
			<Form handleChange={handleChange} handleSubmit={handleSubmit} urlInput={urlInput} />
			<LinkContainer urls={urls} handleDelete={handleDelete} />
		</StyledMain>
	);
}
