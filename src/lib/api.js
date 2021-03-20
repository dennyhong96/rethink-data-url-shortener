import validUrl from "valid-url";
import { toast } from "react-toastify";

export const listUrls = async () => await fetch("/api/urls").then(res => res.json());

export const addurl = async url => {
	if (!validUrl.isUri(url)) {
		toast("Please enter a valid URL.");
		return;
	}

	const data = await fetch("/api/urls", {
		method: "POST",
		body: JSON.stringify({ url }),
	}).then(res => res.json());

	return data;
};
