import { useEffect, useState } from "react";
import Link from "next/link";
import { addurl, listUrls } from "@lib/api";

export default function CustomPaginationActionsTable() {
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
		const newData = await addurl(urlInput);
		if (!newData) return;
		setUrls(newData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Under a url you would like to shorten</h2>
				<input value={urlInput} onChange={handleChange} />
				<button>Shorten</button>
			</form>

			<div>
				{Object.entries(urls).map(([shortUrl, fullUrl]) => {
					return (
						<div key={shortUrl}>
							<div>
								<a href={fullUrl} target="_blank" rel="noreferrer noopener">
									{fullUrl}
								</a>
							</div>
							<div>
								<Link href={shortUrl} passHref>
									<a target="_blank" rel="noreferrer noopener">
										{shortUrl}
									</a>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
