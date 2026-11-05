/* Optional exact odds for browsers with BigInt support. */
(function () {
  'use strict';
  function exactChanceValues(k, n) {
    // Only extreme pooled tails need BigInt. Keep the existing number formats,
    // including a nonzero decimal percentage when Number would underflow.
    let combinations = 1n, tail = 0n;
    for (let j = n; j >= k; j--) {
      tail += combinations;
      combinations = combinations * BigInt(j) / BigInt(n - j + 1);
    }
    const outcomes = 2n ** BigInt(n);
    const digits = (100n * tail * 5n ** BigInt(n)).toString().padStart(n + 1, '0');
    return { oneIn: (outcomes + tail / 2n) / tail, percent: `${digits.slice(0, -n)}.${digits.slice(-n)}` };
  }
  window.exactChanceValues = exactChanceValues;
})();
