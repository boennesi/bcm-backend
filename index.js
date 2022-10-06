import { argv } from "node:process";

import parseCliArguments from "./utils/args.js";

const args = parseCliArguments(argv);
console.log(args);
