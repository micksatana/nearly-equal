# Nearly Equal

[![Actions status](https://github.com/intocode-io/nearly-equal/workflows/build/badge.svg)](https://github.com/intocode-io/nearly-equal/actions)
[![codecov](https://codecov.io/gh/intocode-io/nearly-equal/branch/master/graph/badge.svg)](https://codecov.io/gh/intocode-io/nearly-equal)
[![Version](https://img.shields.io/npm/v/@intocode-io/nearly-equal.svg)](https://npmjs.com/package/@intocode-io/nearly-equal)
![NPM](https://img.shields.io/npm/l/@intocode-io/nearly-equal)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/micksatana?locale.x=en_GB)

## A function to compare Float without worry about something like 0.1 + 0.2 != 0.3

### Installation
1. Install in your project
    ```
    npm i @intocode-io/nearly-equal
    ```
2. Import the code

    ```
    import nearlyEqual from '@intocode-io/nearly-equal';
    ```
    Or
    ```
    const nearlyEqual = require('@intocode-io/nearly-equal');
    ```


### Usage
#### Problem
The problem occurs when you try to compare Float variables
```
0.1 + 0.2 === 0.3 // false
```
Because 0.1 + 0.2 in many programming language including JavaScript is 0.30000000000000004
```
0.1 + 0.2 // 0.30000000000000004
```
#### Solution
`nearlyEqual` can help you
```
nearlyEqual(0.1 + 0.2, 0.3); // true
```

#### Attribution
["The Floating Point Guide, Comparison"](https://floating-point-gui.de/errors/comparison/) by Michael Borgwardt. TypeScript source code in this repository is followed the logics provided in the article.

### License

Copyright &copy; 2018-2019 intocode Co., Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
