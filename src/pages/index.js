import Link from "next/link";

import useUrls from "@hooks/useUrls";

export default function CustomPaginationActionsTable() {
	const { urls, handleChange, handleSubmit, urlInput } = useUrls();
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
