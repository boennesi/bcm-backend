import { argv } from "node:process";

import { fetchAllCentralsData } from "./centrals/index.js";
import parseCliArguments from "./utils/args.js";
import { assertRequiredArgs } from "./assertions.js";

try {
  const args = parseCliArguments(argv);
  assertRequiredArgs(args);
  const rawCentralsData = await fetchAllCentralsData(args.from, args.to);
  console.log(rawCentralsData);
} catch (error) {
  console.error(error.message);
}
