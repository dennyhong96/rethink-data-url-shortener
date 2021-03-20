const Urls = () => {
	return null;
};

export const getServerSideProps = async ({ params, res }) => {
	const { url } = params;
	const { fullUrl } = await fetch(
		`${process.env.NEXT_PUBLIC_APP_DOMAIN}api/urls?short=${url}`,
	).then(res => res.json());

	// Server side redirect
	res.statusCode = 302;
	res.setHeader("Location", fullUrl);
	return { props: {} };
};

export default Urls;
