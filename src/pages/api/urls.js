import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const DB = path.resolve("_data", "urls.json");
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;

export default async function handler(req, res) {
	if (req.method === "GET") {
		// Get full url by short id
		if (req.query.short) {
			const { short: shortId } = req.query;

			const shortUrl = `${APP_DOMAIN}/u/${shortId}`;

			const data = fs.readFileSync(path.resolve("_data", "urls.json"));
			const urls = JSON.parse(data);

			const shortUrlInDB = Object.keys(urls).find(key => key === shortUrl);

			const fullUrl = urls[shortUrlInDB];
			return res.status(200).json({ fullUrl });
		}

		// List all urls
		const data = fs.readFileSync(path.resolve("_data", "urls.json"));
		return res.status(200).json(data);
	}

	// Write a new url to DB
	if (req.method === "POST") {
		const { url } = JSON.parse(req.body);

		const data = JSON.parse(fs.readFileSync(DB));

		const shortenedUrl = `${APP_DOMAIN}/u/${nanoid(8)}`;

		const newData = { [shortenedUrl]: url, ...data };

		fs.writeFileSync(DB, JSON.stringify(newData));

		return res.status(200).json(newData);
	}
}
