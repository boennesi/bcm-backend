import { fromCSV } from "./csv.js";
import { fromJSON } from "./json.js";

export function parse(rawData, format, properties) {
  const parse = {
    json: fromJSON,
    csv: fromCSV,
  };
  return parse[format](rawData, properties);
}
