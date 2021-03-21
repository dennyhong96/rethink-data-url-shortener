import React from "react";
import { fireEvent, waitFor } from "@testing-library/dom";

import HomePage from "@pages/index";
import { addurl, listUrls } from "@lib/api";
import { render } from "../test-utils";

const TEST_URL = "https://example4.com";
const MOCK_DATA = {
	"http://localhost:3000/u/sseessee": "https://example.com",
	"http://localhost:3000/u/sseesstt": "https://example2.com",
	"http://localhost:3000/u/sseessaa": "https://example3.com",
};
const NEW_SHORT_URL = "http://localhost:3000/u/sseessqq";
const NEW_RECORD = { "http://localhost:3000/u/sseessqq": "https://example4.com" };

jest.mock("@lib/api");

describe("HomePage", () => {
	beforeEach(() => {
		listUrls.mockReturnValue(MOCK_DATA);
		addurl.mockReturnValue({ ...MOCK_DATA, ...NEW_RECORD });
	});

	test("Should render the main call to action button", async () => {
		const { getByText } = render(<HomePage />);
		const button = getByText("Shorten");
		expect(button).toBeVisible();
	});

	test("Should render new record's short URL on button click.", async () => {
		const { getByText } = render(<HomePage />);
		const button = getByText("Shorten");

		fireEvent.click(button);

		await waitFor(async () => {
			expect(getByText(NEW_SHORT_URL)).toBeInTheDocument();
		}); // Wait for animation
	});

	test("Should render new record's full URL on button click.", async () => {
		const { getByText } = render(<HomePage />);
		const button = getByText("Shorten");

		fireEvent.click(button);

		await waitFor(async () => {
			expect(getByText(NEW_RECORD[NEW_SHORT_URL])).toBeInTheDocument();
		});
	});

	test("URL input should render correctly.", async () => {
		const { getByTestId } = render(<HomePage />);
		const input = getByTestId("url-input");
		expect(input).toBeVisible();
	});

	test("URL input should work correctly.", async () => {
		const { getByTestId } = render(<HomePage />);
		const input = getByTestId("url-input");
		fireEvent.input(input, { target: { value: TEST_URL } });
		expect(input).toHaveValue(TEST_URL);
	});

	test("Should render all short urls", async () => {
		const { getByText } = render(<HomePage />);
		await waitFor(async () => {
			for (const shortUrl in MOCK_DATA) {
				expect(getByText(shortUrl)).toBeInTheDocument();
			}
		});
	});

	test("Should render all full urls", async () => {
		const { getByText } = render(<HomePage />);
		await waitFor(async () => {
			for (const shortUrl in MOCK_DATA) {
				expect(getByText(MOCK_DATA[shortUrl])).toBeInTheDocument();
			}
		});
	});
});
