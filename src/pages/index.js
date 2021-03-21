import styled from "styled-components";
import useUrls from "@hooks/useUrls";
import Form from "@components/Form";
import LinkContainer from "@components/LinkContainer";

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

export default function CustomPaginationActionsTable() {
	const { urls, handleChange, handleSubmit, urlInput } = useUrls();

	return (
		<StyledMain>
			<Form handleChange={handleChange} handleSubmit={handleSubmit} urlInput={urlInput} />
			<LinkContainer urls={urls} />
		</StyledMain>
	);
}
