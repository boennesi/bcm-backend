import assert from "node:assert/strict";

import { fromCSV, toCSV } from "../../../utils/parsers/csv.js";

describe("#csv", function () {
  const jsonFileContent = [
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

  describe("fromCSV", function () {
    it("Should convert CSV raw data to formated JSON data", function () {
      const start = "le_debut";
      const end = "la_fin";
      const power = "la_puissance";
      const csvHeader = `${start},${end},${power}`;
      const actual = `${csvHeader}\n900,1800,100\n1800,2700,200`;
      assert.deepEqual(fromCSV(actual, { start, end, power }), jsonFileContent);
    });
  });

  describe("toCSV", function () {
    it("Should convert power segments JSON to CSV format", async function () {
      const csvHeader = "start,end,power";
      const expected = `${csvHeader}\n900,1800,100\n1800,2700,200`;
      assert.deepEqual(toCSV(jsonFileContent), expected);
    });
  });
});
