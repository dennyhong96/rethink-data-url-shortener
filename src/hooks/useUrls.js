import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { addurl, listUrls } from "@lib/api";

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
		try {
			if (Object.values(urls).find(url => url === urlInput)) {
				throw new Error("That URL is already shortened.");
			}
			const newData = await addurl({ url: urlInput });

			if (!newData) return;
			setUrls(newData);
		} catch (error) {
			toast(error.message);
		}
	};

	return {
		urls,
		setUrlInput,
		handleChange,
		handleSubmit,
	};
};

export default useUrls;
