import { getUrlByShortId } from "@lib/api";

const Urls = () => {
	return null;
};

export const getServerSideProps = async ({ params, res }) => {
	const { shortId } = params;
	const fullUrl = await getUrlByShortId({ shortId });

	// Server side redirect
	res.statusCode = 302;
	res.setHeader("Location", fullUrl);
	return { props: {} };
};

export default Urls;
