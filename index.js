import { argv } from "node:process";

import { getAllProductions } from "./api/index.js";
import { aggregateCentralsSegmentsProduction } from "./utils/aggregate.js";
import parseCliArguments from "./utils/args.js";
import { assertRequiredArgs } from "./utils/assertions.js";

try {
  const args = parseCliArguments(argv);
  assertRequiredArgs(args);
  const productionSegments = await getAllProductions(args.from, args.to);
  const aggregatedProductionSegments =
    await aggregateCentralsSegmentsProduction(productionSegments);
  console.log(aggregatedProductionSegments);
} catch (error) {
  console.error(error);
}
