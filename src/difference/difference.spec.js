const difference = require('./difference');

/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */

describe('Creates an array of values that are in the first array, but not not in the second array.', () => {
  describe('array of numbers', () => {
    it('first array with numbers, second is empty', () => {
      expect(difference([1, 2, 3, 4, 5], [])).toEqual([1, 2, 3, 4, 5]);
    });
    it('first array equal to the second one', () => {
      expect(difference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual([]);
    });
    it('first array has three different values', () => {
      expect(difference([1, 2, 3, 4, 5], [1, 2])).toEqual([3, 4, 5]);
    });
    it('first array is empty,the second one has three numbers', () => {
      expect(difference([], [1, 2, 3])).toEqual([]);
    });
    it('first array has several equal numbers,the second one has two numbers', () => {
      expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });
  });
  describe('mixed array', () => {
    it('first array with numbers, second with strings', () => {
      expect(difference([1, 2], ['1', '2'])).toEqual([1, 2]);
    });
    it('first array with strings, second with numbers', () => {
      expect(difference(['1', '2'], [1, 2])).toEqual(['1', '2']);
    });
    it('first array with numbers, second with strings', () => {
      expect(difference([1, 2], ['1', '2'])).toEqual([1, 2]);
    });
    it('first array has three different values type of string', () => {
      expect(difference(['1', '2', '3', '4', '5'], ['1', '2'])).toEqual([
        '3',
        '4',
        '5',
      ]);
    });
    it('first array has three different types of values', () => {
      expect(difference([1, '2', '3', 4, 5], [1, '2'])).toEqual(['3', 4, 5]);
    });
  });
});
