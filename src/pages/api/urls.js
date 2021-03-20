import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const DB = path.resolve("_data", "urls.json");
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;

export default async function handler(req, res) {
	if (req.method === "GET") {
		const data = fs.readFileSync(path.resolve("_data", "urls.json"));
		return res.status(200).json(data);
	}

	// Write back to a file
	if (req.method === "POST") {
		const { url } = JSON.parse(req.body);
		const data = JSON.parse(fs.readFileSync(DB));
		const shortenedUrl = `${APP_DOMAIN}${nanoid()}`;
		const newData = { ...data, [url]: shortenedUrl };
		fs.writeFileSync(DB, JSON.stringify(newData));
		return res.status(200).json(newData);
	}
}
