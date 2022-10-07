import fs from "node:fs/promises";
import path from "node:path";
import querystring from "node:querystring";

import fetch from "./utils/lib/fetch.js";
import { parse } from "./utils/parsers/index.js";
import { completeCentralSegments } from "./utils/complete.js";

/**
 * Fetch production information for a single central
 * @param {string} from
 * @param {string} to
 * @param {CentralInfo}
 * @returns {SegmentInfo[]}
 */
async function getCentralProduction(
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

/**
 * Read the config file containing managed centrals
 * Retrieve, standardize and complete data for each central
 * Return all information in a flat array
 * @param {string} from
 * @param {string} to
 * @returns {SegmentInfo[]}
 */
export async function getAllProductions(from, to) {
  const rawCentralsInfo = await fs.readFile("./data/centrals.json", {
    encoding: "utf-8",
  });
  const centralsInfo = JSON.parse(rawCentralsInfo);
  return Promise.all(
    centralsInfo.map((centralInfo) =>
      getCentralProduction(from, to, centralInfo)
    )
  ).then((fullCentralsSegments) => fullCentralsSegments.flat());
}

/**
 * @typedef CentralInfoProperties
 * @property {string} start
 * @property {string} end
 * @property {string} power
 */

/**
 * @typedef CentralInfo
 * @property {string} endpoint
 * @property {string} format
 * @property {CentralInfoProperties} properties
 * @property {number} period
 */

/**
 * @typedef SegmentInfo
 * @property {number} start
 * @property {number} end
 * @property {number} power
 */
