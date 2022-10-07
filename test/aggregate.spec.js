import assert from "node:assert/strict";

import { aggregateCentralsSegmentsProduction } from "../utils/aggregate.js";

describe("#aggregate", function () {
  describe("aggregateCentralsSegmentsProduction", function () {
    it("Should successfully aggregate powers for production segments", function () {
      const productionSegments = [
        {
          start: 0,
          end: 900,
          power: 100,
        },
        {
          start: 900,
          end: 1800,
          power: 400,
        },
        {
          start: 0,
          end: 900,
          power: 300,
        },
        {
          start: 0,
          end: 900,
          power: 600,
        },
        {
          start: 900,
          end: 1800,
          power: 500,
        },
        {
          start: 900,
          end: 1800,
          power: 600,
        },
      ];
      const expected = [
        {
          start: 0,
          end: 900,
          power: 1000,
        },
        {
          start: 900,
          end: 1800,
          power: 1500,
        },
      ];
      assert.deepEqual(
        aggregateCentralsSegmentsProduction(productionSegments),
        expected
      );
    });
  });
});
