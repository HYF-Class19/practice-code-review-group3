/* eslint-disable sonarjs/no-identical-functions */
import { deepFlat } from './deep-flat.js';

describe('Converts a array', () => {
  describe('Converts a nested array', () => {
    it('nested number array', () => {
      const expected = deepFlat([1, [2, [3, [4]], 5]]);
      const received = [1, 2, 3, 4, 5];
      expect(expected).toEqual(received);
    });
    it('nested number array', () => {
      const expected = deepFlat([1, [-17, [3, [3.8]], 5]]);
      const received = [1, -17, 3, 3.8, 5];
      expect(expected).toEqual(received);
    });
    it('nested letter array', () => {
      const expected = deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
      const received = ['a', 'b', 'c', 'd', 'e'];
      expect(expected).toEqual(received);
    });
    it('nested string, letter and number array', () => {
      const expected = deepFlat(['ab', ['b', [[1], ['de']], 2]]);
      const received = ['ab', 'b', 1, 'de', 2];
      expect(expected).toEqual(received);
    });
    it('nested string array', () => {
      const expected = deepFlat(['ab', ['bc', [['cd'], ['de']], 'ef']]);
      const received = ['ab', 'bc', 'cd', 'de', 'ef'];
      expect(expected).toEqual(received);
    });
    it('nested number and string array', () => {
      const expected = deepFlat([1, ['ab', [[3], ['de']], 5]]);
      const received = [1, 'ab', 3, 'de', 5];
      expect(expected).toEqual(received);
    });
    it('nested number and letter array', () => {
      const expected = deepFlat([1, ['b', [[3], ['d']], 5]]);
      const received = [1, 'b', 3, 'd', 5];
      expect(expected).toEqual(received);
    });
    it('nested empty array', () => {
      const expected = deepFlat([1, [3, []]]);
      const received = [1, 3];
      expect(expected).toEqual(received);
    });
    it('nested array with empty array', () => {
      const expected = deepFlat([]);
      const received = [];
      expect(expected).toEqual(received);
    });
  });
  describe('check side effect', () => {
    it('there isn`t side effect of the array if elements are numbers', () => {
      const expected = [1, [2, [3, [4]], 5]];
      deepFlat(expected);
      expect(expected).toEqual([1, [2, [3, [4]], 5]]);
    });
    it('there isn`t side effect of the array if elements are numbers', () => {
      const expected = [1, [17, [3, [-8]], 5]];
      deepFlat(expected);
      expect(expected).toEqual([1, [17, [3, [-8]], 5]]);
    });
    it('there isn`t side effect of the array if elements are strings', () => {
      const expected = ['dog', ['cat', ['bird', ['sun']], 'pig']];
      deepFlat(expected);
      expect(expected).toEqual(['dog', ['cat', ['bird', ['sun']], 'pig']]);
    });
    it('there isn`t side effect of the array if elements are strings', () => {
      const expected = ['a', ['b', ['c', ['d']], 'f']];
      deepFlat(expected);
      expect(expected).toEqual(['a', ['b', ['c', ['d']], 'f']]);
    });
    it('there isn`t side effect of the array if elements are strings and numbers', () => {
      const expected = ['dog', [1, ['bird', [3]], 'pig']];
      deepFlat(expected);
      expect(expected).toEqual(['dog', [1, ['bird', [3]], 'pig']]);
    });
    it('there isn`t side effect of the array if array is empty', () => {
      const expected = [];
      deepFlat(expected);
      expect(expected).toEqual([]);
    });
  });
  describe('check errors if argument is not array', () => {
    it('get TypeError if argument is number ', () => {
      const expected = 1;
      expect(() => deepFlat(expected)).toThrow(TypeError());
    });
    it('get TypeError if argument is string', () => {
      const expected = 'dog';
      expect(() => deepFlat(expected)).toThrow(TypeError());
    });
    it('get TypeError if argument is empty string', () => {
      const expected = '';
      expect(() => deepFlat(expected)).toThrow(TypeError());
    });
    it('get TypeError if argument is string of numbers', () => {
      const expected = '1, 2, 3';
      expect(() => deepFlat(expected)).toThrow(TypeError());
    });
    it('get TypeError if argument is NaN', () => {
      const expected = NaN;
      expect(() => deepFlat(expected)).toThrow(TypeError());
    });
  });
});
