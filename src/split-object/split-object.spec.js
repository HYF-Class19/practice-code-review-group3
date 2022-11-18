import { splitObject } from './split-object.js';

describe('Splits an object into multiple objects with one key/value pair each', () => {
  describe('The object to split into key/value pairs.', () => {
    it('Returns a new array with one entry for each key/value pair', () => {
      expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
        { a: 1 },
        { b: 2 },
        { c: 3 },
      ]);
    });
    it('returns an empty object to the new empty array', () => {
      expect(splitObject({})).toEqual([]);
    });
    it('returns a new array with one entry for each key or value pair', () => {
      expect(
        splitObject({
          name: 'robs',
          age: 25,
          tall: true,
          userName: 'sbor',
        }),
      ).toEqual([
        { name: 'robs' },
        { age: 25 },
        { tall: true },
        { userName: 'sbor' },
      ]);
    });
    it('returns an array if argument an array', () => {
      expect(splitObject([])).toEqual([]);
    });
    it('returns an empty object to new empties arrays', () => {
      expect(splitObject({})).toEqual([]);
    });
    it('Throws an error if an argument is a string', () => {
      expect(() => splitObject('')).toThrow(Error);
    });
    it('Throws an error if an argument is not an object', () => {
      expect(() => splitObject(0)).toThrow(Error);
    });
  });
});
