import { argv } from "node:process";

import parseCliArguments from "./utils/args.js";
import { assertRequiredArgs } from "./assertions.js";

try {
  const args = parseCliArguments(argv);
  assertRequiredArgs(args);
  console.log(args);
} catch (error) {
  console.error(error.message);
}
