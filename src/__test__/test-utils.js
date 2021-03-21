import { render } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import theme from "@styles/theme";

const Providers = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
			<ToastContainer autoClose={2500} />
		</ThemeProvider>
	);
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
