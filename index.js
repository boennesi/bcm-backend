import { argv } from "node:process";

import { getAllProductions } from "./api.js";
import { aggregateCentralsSegmentsProduction } from "./utils/aggregate.js";
import parseCliArguments from "./utils/lib/args.js";
import { assertRequiredArgs } from "./utils/validators/assertions.js";

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
