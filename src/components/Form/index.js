import { Graphic } from "@components/icons";
import { StyledForm, StyledInput } from "./styles";

const Form = ({ handleSubmit, urlInput, handleChange }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Graphic />
			<h1>Shorten Any Links</h1>
			<StyledInput>
				<input
					data-testid="url-input"
					value={urlInput}
					onChange={handleChange}
					placeholde="https://example.com"
				/>
				<button type="submit">Shorten</button>
			</StyledInput>
		</StyledForm>
	);
};

export default Form;
