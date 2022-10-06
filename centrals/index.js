import fs from "node:fs/promises";
import path from "node:path";
import querystring from "node:querystring";

import fetch from "../utils/fetch.js";

async function fetchCentralData(from, to, endpoint) {
  const query = querystring.stringify({ from, to });
  return fetch(path.join(endpoint, `?${query}`));
}

export async function fetchAllCentralsData(from, to) {
  const rawCentralsInfo = await fs.readFile("./data/centrals.json", {
    encoding: "utf-8",
  });
  const centralsInfo = JSON.parse(rawCentralsInfo);
  return Promise.all(
    centralsInfo.map(({ endpoint }) => fetchCentralData(from, to, endpoint))
  );
}
