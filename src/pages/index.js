import { useEffect, useState } from "react";
import Link from "next/link";

export default function CustomPaginationActionsTable() {
	const [urls, setUrls] = useState({});

	const [urlInput, setUrlInput] = useState("");

	useEffect(() => {
		(async () => {
			const data = await fetch("/api/urls").then(res => res.json());
			setUrls(data);
		})();
	}, []);

	const handleChange = evt => {
		setUrlInput(evt.target.value);
	};

	const handleSubmit = async evt => {
		evt.preventDefault();
		const data = await fetch("/api/urls", {
			method: "POST",
			body: JSON.stringify({ url: urlInput }),
		}).then(res => res.json());
		setUrls(data);
	};

	return (
		<div className="">
			<form onSubmit={handleSubmit}>
				<h2>Under a url you would like to shorten</h2>
				<input value={urlInput} onChange={handleChange} />
				<button>Shorten</button>
			</form>

			<div>
				{Object.entries(urls).map(([shortUrl, fullUrl]) => {
					return (
						<div key={shortUrl}>
							<div className="">
								<a href={fullUrl} target="_blank" rel="noreferrer noopener">
									{fullUrl}
								</a>
							</div>
							<div className="">
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
