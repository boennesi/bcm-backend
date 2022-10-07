import assert from "node:assert/strict";

import { fromJSON } from "../../../utils/parsers/json.js";

describe("#json", function () {
  describe("fromJSON", function () {
    it("Should convert JSON raw data to formated JSON data", function () {
      const start = "start_time";
      const end = "end_time";
      const power = "value";
      const actual =
        '[{"start_time": 900,"end_time": 1800,"value":100},{"start_time":1800, "end_time": 2700,"value":200}]';
      const expected = [
        {
          start: 900,
          end: 1800,
          power: 100,
        },
        {
          start: 1800,
          end: 2700,
          power: 200,
        },
      ];
      assert.deepEqual(fromJSON(actual, { start, end, power }), expected);
    });
  });
});
