import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { addurl, deleteUrlbyShortId, listUrls } from "@lib/api";

const useUrls = () => {
	const [urls, setUrls] = useState({});
	const [urlInput, setUrlInput] = useState("");

	useEffect(() => {
		(async () => {
			const data = await listUrls();
			setUrls(data);
		})();
	}, []);

	const handleChange = evt => {
		setUrlInput(evt.target.value);
	};

	const handleSubmit = async evt => {
		evt.preventDefault();

		const trimmedUrl = urlInput.endsWith("/") ? urlInput.slice(0, urlInput.length - 1) : urlInput;
		try {
			if (Object.values(urls).find(url => url === trimmedUrl)) {
				throw new Error("That URL is already shortened.");
			}

			const newData = await addurl({ url: trimmedUrl });

			if (!newData) return;

			setUrls(newData);
			setUrlInput("");
		} catch (error) {
			toast(error.message);
		}
	};

	const handleDelete = async ({ shortUrl }) => {
		const newData = await deleteUrlbyShortId({ shortUrl });
		setUrls(newData);
	};

	return {
		urls,
		urlInput,
		handleChange,
		handleSubmit,
		handleDelete,
	};
};

export default useUrls;
