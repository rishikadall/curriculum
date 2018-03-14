/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b) => {
       if (a == 1) { return b; }
      else {
                return b + times(a - 1, b);
            }

module.exports = {
  solution,
};
