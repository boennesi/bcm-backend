import assert from "node:assert/strict";

const REQUIRED_ARS = ["from", "to", "format"];

export function assertRequiredArgs(args) {
  REQUIRED_ARS.forEach((arg) =>
    assert(args.hasOwnProperty(arg), new Error(`Missing argument: "${arg}"`))
  );
}

export function assertValidArgs(args) {
  /**
   * TODO
   * Might come back later here
   * Verify that to and from are dates and well formatted (maybe a little more difficult without node_modules like momemt/date-fns)
   * Verify that to > from
   * Verify that format is known and handled
   */
}
