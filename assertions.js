import assert from "node:assert/strict";

const REQUIRED_ARS = ["from", "to", "format"];

export function assertRequiredArgs(args) {
  REQUIRED_ARS.forEach((arg) =>
    assert(args.hasOwnProperty(arg), new Error(`Missing argument: "${arg}"`))
  );
}
