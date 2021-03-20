import { useEffect, useState } from "react";

export default function CustomPaginationActionsTable() {
	const [urls, setUrls] = useState({});

	const [urlInput, setUrlInput] = useState("");

	useEffect(() => {
		(async () => {
			const data = await fetch("/api/urls").then(res => res.json());
			setUrls({ data });
		})();
	}, []);

	console.log({ urls });

	const handleChange = evt => {
		setUrlInput(evt.target.value);
	};

	const handleSubmit = async evt => {
		evt.preventDefault();
		const data = await fetch("/api/urls", {
			method: "POST",
			body: JSON.stringify({ url: urlInput }),
		}).then(res => res.json());
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Under a url you would like to shorten</h2>
			<input value={urlInput} onChange={handleChange} />
			<button>Shorten</button>
		</form>
	);
}
