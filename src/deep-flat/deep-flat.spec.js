import { deepFlat } from './deep-flat.js';

describe('Converts a array', () => {
  describe('Converts a nested array', () => {
    it('nested number array', () => {
      const expected = deepFlat([1, [2, [3, [4]], 5]]);
      const received = [1, 2, 3, 4, 5];
      expect(expected).toEqual(received);
    });
    it('nested letter array', () => {
      const expected = deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
      const received = ['a', 'b', 'c', 'd', 'e'];
      expect(expected).toEqual(received);
    });
    it('nested number and letter array', () => {
      const expected = deepFlat([1, ['b', [[3], ['d']], 5]]);
      const received = [1, 'b', 3, 'd', 5];
      expect(expected).toEqual(received);
    });
    it('nested empty array', () => {
      const expected = deepFlat([]);
      const received = [];
      expect(expected).toEqual(received);
    });
  });
  describe('check side effect', () => {
    it('there isn`t side effect of the array', () => {
      const expected = [1, [2, [3, [4]], 5]];
      deepFlat(expected);
      expect(expected).toEqual([1, [2, [3, [4]], 5]]);
    });
  });
});
