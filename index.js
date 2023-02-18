//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(input, dsout) {
  this.input = input;
  this.dsout = dsout;
}

//#endregion

//#region enoun

/**
 * @Constructs enoun
 * @description Constructs the 'enoun' function.
 * @param {string} input - The input sentence raw string.
 * Pass NULL to process the constructor's 'input'.
 * @param {number} swa - An integer in the range of 0-2, which determines the amount of stop words to be processed.
 * @returns {object} - Returns an object with the following options:
 * - noun(): Separated English nouns
 * - stop(): Rest of stop words
 */

Constructor.prototype.enoun = function (input, swa) {
  input = objOrFncInp(input, this.input);
  let out = enoun_f(input, swa, this.dsout);
  return out;
};

//#endregion

//#region enoun_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_clnarr = require("../dropsuit-clnarr/index.js");
var ds_clnarr = new dropsuit_clnarr(false);

/**
 * Separates English nouns and stop words from an input string.
 * @param {string} input - The input sentence raw string.
 * Pass NULL to process the constructor's 'input'.
 * @param {number} swa - An integer in the range of 0-2, which determines the amount of stop words to be processed.
 * 0 processes the minimum amount, 1 adds extra stop words,
 * and 2 includes the maximum number of stop words from three distinct lists.
 * @param {boolean} dispout - Determines if the processing output results are displayed in the terminal.
 * @returns {object} - Returns an object with the following options:
 * - noun(): Separated English nouns
 * - stop(): Rest of stop words
 * @example enoun_f(string, bool)
 */

function enoun_f(input, swa, dispout) {
  let stopWords = buildList(swa);
  let inputNounLst = [];
  let inputNonNounLst = [];
  input = ds_clnstr.clnstr(input).txt();
  var inputSentenceWords = input.split(" ");
  for (let i = 0; i < inputSentenceWords.length; i++) {
    var val = inputSentenceWords[i].replace(/[0-9]/g, "");
    var v = checkval(val);
    if (v == true) {
      val = ds_clnstr.clnstr(val).txt();
      if (!stopWords.includes(val)) {
        if (!inputNounLst.includes(val)) {
          inputNounLst.push(val);
        }
      } else if (stopWords.includes(val)) {
        if (!inputNonNounLst.includes(val)) {
          inputNonNounLst.push(val);
        }
      }
    }
  }

  inputNounLst = ds_clnarr.clnarr(inputNounLst, 1);
  inputNonNounLst = ds_clnarr.clnarr(inputNonNounLst, 1);
  let retout = return_enounOut(inputNounLst, inputNonNounLst);
  display(dispout, input, retout); /// DISPLAY >>

  return retout;
}

function buildList(swa) {
  let avoidLst = [];
  const getList = require("./swdt.js");
  let sw1 = getList.stopwords_a();
  let sw2 = getList.stopwords_b();
  let sw3 = getList.stopwords_c();
  if (swa > 2) {
    swa = 0;
  }
  if (swa == 0) {
    avoidLst = getList.stopwords_a();
  } else if (swa == 1) {
    avoidLst = sw1.concat(sw2);
  } else if (swa == 2) {
    avoidLst = sw1.concat(sw2, sw3);
  }
  avoidLst = ds_clnarr.clnarr(avoidLst, 2);
  return avoidLst;
}

function checkval(v) {
  if (v != "" && v != " " && v != undefined && v != null) {
    return true;
  } else {
    return false;
  }
}

function return_enounOut(inputNounLst, inputNonNounLst) {
  const enounObj = {
    nounw: inputNounLst,
    stopw: inputNonNounLst,
    noun: function () {
      return this.nounw;
    },
    stop: function () {
      return this.stopw;
    },
  };
  return enounObj;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

//#endregion

//#region  console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(dispout, input, retout) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\n",
      [input],
      "\n\nOutput object:\n\n",
      retout,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
