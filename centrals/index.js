import path from "node:path";
import querystring from "node:querystring";

import fetch from "../utils/fetch.js";

export async function fetchCentralData(from, to, endpoint) {
  const query = querystring.stringify({ from, to });
  return fetch(path.join(endpoint, `?${query}`));
}
