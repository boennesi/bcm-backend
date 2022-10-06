import fs from "node:fs/promises";
import path from "node:path";
import querystring from "node:querystring";

import fetch from "../utils/fetch.js";
import { parse } from "../parsers/index.js";
import { completeCentralSegments } from "../utils/complete.js";

async function fetchCentralData(
  from,
  to,
  { endpoint, format, properties, period }
) {
  const query = querystring.stringify({ from, to });
  const rawData = await fetch(path.join(endpoint, `?${query}`));
  const centralSegments = parse(rawData, format, properties);
  const fullCentralSegments = completeCentralSegments(centralSegments, period);
  return fullCentralSegments;
}

export async function fetchAllCentralsData(from, to) {
  const rawCentralsInfo = await fs.readFile("./data/centrals.json", {
    encoding: "utf-8",
  });
  const centralsInfo = JSON.parse(rawCentralsInfo);
  return Promise.all(
    centralsInfo.map((centralInfo) => fetchCentralData(from, to, centralInfo))
  );
}
