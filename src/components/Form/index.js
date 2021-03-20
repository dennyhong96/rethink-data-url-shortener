import useUrls from "@hooks/useUrls";
import { Graphic } from "@components/icons";
import { StyledForm, StyledInput } from "./styles";

const Form = () => {
	const { handleChange, handleSubmit, urlInput } = useUrls();

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Graphic />
			<h1>Shorten Any Links</h1>
			<StyledInput>
				<input value={urlInput} onChange={handleChange} />
				<button type="submit">Shorten</button>
			</StyledInput>
		</StyledForm>
	);
};

export default Form;
