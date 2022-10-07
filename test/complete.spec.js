import assert from "node:assert/strict";

import {
  completeCentralSegments,
  fillMissingSegments,
} from "../utils/complete.js";

describe("#complete", function () {
  describe("fillMissingSegments", function () {
    it("Should successfully fill missing segments", function () {
      const segments = [
        {
          start: 0,
          end: 900,
          power: 100,
        },
        {
          start: 1800,
          end: 2700,
          power: 400,
        },
      ];
      const expected = [
        {
          start: 0,
          end: 900,
          power: 100,
        },
        {
          start: 900,
          end: 1800,
          power: 250,
        },
        {
          start: 1800,
          end: 2700,
          power: 400,
        },
      ];
      assert.deepEqual(fillMissingSegments(segments), expected);
    });
  });

  describe("completeCentralSegments", function () {
    it("Should successfully set segments to same duration", function () {
      const segments = [
        {
          start: 0,
          end: 1800,
          power: 100,
        },
        {
          start: 1800,
          end: 3600,
          power: 400,
        },
      ];
      const expected = [
        {
          start: 0,
          end: 900,
          power: 100,
        },
        {
          start: 900,
          end: 1800,
          power: 100,
        },
        {
          start: 1800,
          end: 2700,
          power: 400,
        },
        {
          start: 2700,
          end: 3600,
          power: 400,
        },
      ];
      assert.deepEqual(completeCentralSegments(segments), expected);
    });
  });
});
