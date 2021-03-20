import React from "react";

const Urls = ({ url }) => {
	return <div>{url}</div>;
};

export const getServerSideProps = async ({ params }) => {
	const { url } = params;
	return {
		props: { url },
	};
};

export default Urls;
