const assert = require("node:assert/strict");
const {isPrime} = require("./index.js");

assert.strictEqual(isPrime(1), false);
assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);
assert.strictEqual(isPrime(4), false);
assert.strictEqual(isPrime(5), true);
assert.strictEqual(isPrime(6), false);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(8), false);
assert.strictEqual(isPrime(9), false);
assert.strictEqual(isPrime(10), false);
assert.strictEqual(isPrime(11), true);
