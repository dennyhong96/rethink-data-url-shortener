import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const DB = path.resolve("_data", "urls.json");
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;

export default async function handler(req, res) {
	if (req.method === "GET") {
		// Handle getting full url by short id
		if (req.query.short) {
			const { short: shortId } = req.query;

			const shortUrl = `${APP_DOMAIN}/u/${shortId}`;

			const data = fs.readFileSync(DB);
			const urls = JSON.parse(data);

			const shortUrlInDB = Object.keys(urls).find(key => key === shortUrl);

			const fullUrl = urls[shortUrlInDB];
			return res.status(200).json({ fullUrl });
		}

		// Handle listing all urls
		const data = fs.readFileSync(DB);

		// If JSON file is invalid, overwrite with empty object
		try {
			JSON.parse(data);
		} catch (error) {
			fs.writeFileSync(DB, JSON.stringify({}));
		}

		return res.status(200).json(data);
	}

	// Handle writing a new url to DB
	if (req.method === "POST") {
		const { url } = JSON.parse(req.body);

		const data = JSON.parse(fs.readFileSync(DB));

		const shortenedUrl = `${APP_DOMAIN}/u/${nanoid(8)}`;

		const newData = { [shortenedUrl]: url, ...data };

		fs.writeFileSync(DB, JSON.stringify(newData));

		return res.status(200).json(newData);
	}

	// Handle deleting a url from DB
	if (req.method === "DELETE") {
		const { shortUrl } = req.query;

		const data = JSON.parse(fs.readFileSync(DB));

		const newData = Object.entries(data).reduce(
			(acc, [key, val]) => (key === shortUrl ? acc : { ...acc, [key]: val }),
			{},
		);

		fs.writeFileSync(DB, JSON.stringify(newData));

		return res.status(200).json(newData);
	}
}
