//#region enoun test

const assert = require("assert");
const dropsuit_enoun = require("../index.js");

//#region testiong data

let input =
  "The majestic whale swims gracefully through the vast ocean, its powerful tail creating ripples in its wake.";

let expected_output_nouns = [
  "majestic",
  "whale",
  "swims",
  "gracefully",
  "vast",
  "ocean",
  "powerful",
  "tail",
  "creating",
  "ripples",
  "wake",
];
let expected_output_stopwords = ["the", "through", "its", "in"];

//#endregion

describe("dropsuit-enoun", () => {
  describe("enoun()", () => {
    it("should return 'nouns' array with noun()", () => {
      let dsenoun = new dropsuit_enoun(input, true);
      let enoun_output = dsenoun.enoun(null, 0).noun();
      assert.deepEqual(enoun_output, expected_output_nouns);
      // console.log("\n\nOutput enoun().noun():", enoun_output, "\n\n");
    });

    it("should return 'stop words' array with stop()", () => {
      let dsenoun = new dropsuit_enoun(input, true);
      let enoun_output = dsenoun.enoun(null, 0).stop();
      assert.deepEqual(enoun_output, expected_output_stopwords);
      // console.log("\n\nOutput enoun().stop():", enoun_output, "\n\n");
    });
  });
});

//#endregion
