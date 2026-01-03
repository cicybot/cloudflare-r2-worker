import { describe,expect, it } from 'vitest';

const {STORAGE_AUTH_KEY_SECRET} = import.meta.env
const WORKER_URL = "https://r2-worker.ob6ha3.workers.dev";
const headers = {
	"X-Custom-Auth-Key": STORAGE_AUTH_KEY_SECRET
}

describe("R2 API", () => {

	it("PUT object", async () => {
		const res = await fetch(
			`${WORKER_URL}/hello.txt`,
			{
				body:"hello world",                // BODY (data)
				headers
			}
		);

		console.log("PUT status:", res.status);
		console.log("PUT text:", await res.text());

		expect(res.status).toBe(200);
	});

	it("GET object", async () => {
		const res = await fetch(`${WORKER_URL}/hello.txt`, {
			method: "GET",
			headers
		});

		console.log("GET status:", res.status);
		console.log("GET text:", await res.text());

		expect(res.status).toBe(200);
	});

});