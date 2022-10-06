import { argv } from "node:process";

import { fetchCentralData } from "./centrals/index.js";
import parseCliArguments from "./utils/args.js";
import { assertRequiredArgs } from "./assertions.js";

const URL_ENDPOINT = "https://interview.beta.bcmenergy.fr/hawes";

try {
  const args = parseCliArguments(argv);
  assertRequiredArgs(args);
  const rawCentralData = await fetchCentralData(
    args.from,
    args.to,
    URL_ENDPOINT
  );
  console.log(rawCentralData);
} catch (error) {
  console.error(error.message);
}
