import assert from "node:assert/strict";

import { assertRequiredArgs } from "../../../utils/validators/assertions.js";

describe("#assertions", function () {
  describe("assertRequiredArgs", function () {
    it("Should succeed for all required arguments", function () {
      assert.doesNotThrow(() => {
        assertRequiredArgs({
          from: "01-01-2022",
          to: "02-01-2022",
          format: "json",
        });
      });
    });

    [
      {
        missingArg: "format",
        args: {
          from: "01-01-2022",
          to: "02-01-2022",
        },
      },
      {
        missingArg: "from",
        args: {
          format: "json",
          to: "02-01-2022",
        },
      },
      {
        missingArg: "to",
        args: {
          from: "01-01-2022",
          format: "csv",
        },
      },
    ].forEach((ctx) => {
      it(`Should throw an error with missing argument ${ctx.missingArg}`, function () {
        assert.throws(() => {
          assertRequiredArgs(ctx.args);
        });
      });
    });
  });
});
