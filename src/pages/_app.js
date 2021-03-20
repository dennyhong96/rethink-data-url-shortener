import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "@styles/globalStyles";
import theme from "@styles/theme";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Component {...pageProps} />
			<ToastContainer autoClose={2500} />
		</ThemeProvider>
	);
}

export default MyApp;
