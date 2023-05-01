[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-enoun.svg?style=flat)](https://www.npmjs.com/package/dropsuit-enoun) [![npm](https://img.shields.io/npm/dt/dropsuit-enoun.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-enoun) [![License](https://img.shields.io/npm/l/dropsuit-enoun.svg)](https://www.npmjs.com/package/dropsuit-enoun)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the enoun Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The enoun function is one of its modules, designed for filtering text and including only English nouns. It is available under the Apache License 2.0.

## DropSuit NLP Method: enoun - A JavaScript and Node.js function for separating and extracting English nouns or stop words

The enoun function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that separates and extracts English nouns or stop words. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-enoun
```

### Usage

Import the library in your project:

```
const dropsuit_enoun = require("dropsuit-enoun");

```

Keep NULL or insert 'myInputString' to constructor and set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsenoun = new dropsuit_enoun(null, false);
```

#### enoun(input: string|null, swa: number)

- **string**: Sentence string, or null to use constructor input.
- **swa**: Stop word amount, a number 0-2, where 0 is minimum, 1 adds extra, and 2 is maximum from 3 lists.

#### Returns:

- **noun()**: Array of separated English nouns.
- **stop()**: Array of stop words.

```
let out = dsenoun.enoun(myInputString, 0);
console.log(out);
```

Return object instance:

```

Input:

 [
  'the towering redwood trees stand tall reaching for the sky and providing a home for countless creatures'
]

Output object:

 {
  nounw: [
    'towering',  'redwood',
    'trees',     'stand',
    'tall',      'reaching',
    'sky',       'providing',
    'home',      'countless',
    'creatures'
  ],
  stopw: [ 'the', 'for', 'and', 'a' ],
  noun: [Function: noun],
  stop: [Function: stop]
}
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-enoun

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)