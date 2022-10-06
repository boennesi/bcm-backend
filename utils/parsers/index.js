import { fromCSV, toCSV } from "./csv.js";
import { fromJSON, toJSON } from "./json.js";

export function parse(rawData, format, properties) {
  const parse = {
    json: fromJSON,
    csv: fromCSV,
  };
  return parse[format](rawData, properties);
}

export function output(productionSegments, format) {
  const output = {
    json: toJSON,
    csv: toCSV,
  };
  return output[format](productionSegments);
}
