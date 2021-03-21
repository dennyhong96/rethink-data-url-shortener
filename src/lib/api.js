import validUrl from "valid-url";

export const listUrls = async () => await fetch("/api/urls").then(res => res.json());

export const addurl = async ({ url }) => {
	if (!validUrl.isUri(url)) {
		throw new Error("Please enter a valid URL.");
	}

	const data = await fetch("/api/urls", {
		method: "POST",
		body: JSON.stringify({ url }),
	}).then(res => res.json());

	return data;
};

export const getUrlByShortId = async ({ shortId }) => {
	const { fullUrl } = await fetch(
		`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/urls?short=${shortId}`,
	).then(res => res.json());

	console.log(fullUrl);
	return fullUrl;
};
