import useUrls from "@hooks/useUrls";
import Form from "@components/Form";
import LinkContainer from "@components/LinkContainer";

import { StyledMain } from "./_index.style";

export default function CustomPaginationActionsTable() {
	const { urls, handleChange, handleSubmit, urlInput, handleDelete } = useUrls();

	return (
		<StyledMain variants={mainVariants} initial="initial" animate="animate" exit="exit">
			<Form handleChange={handleChange} handleSubmit={handleSubmit} urlInput={urlInput} />
			<LinkContainer urls={urls} handleDelete={handleDelete} />
		</StyledMain>
	);
}

export const mainVariants = {
	initial: { opacity: 0, scale: 0.95, y: -15 },
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			duration: 1,
		},
	},
	exit: { opacity: 0, scale: 0.95, y: 15 },
};
