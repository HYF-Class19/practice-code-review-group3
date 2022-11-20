const intersection = require('./intersection.js');

describe('Finds common values between 2 arrays', () => {
  it('inspects array and intersects with values', () => {
    const array = [1, 2, 3, 4, 5];
    const values = [1, 6, 7, 3, 5];
    expect(intersection(array, values)).toEqual([1, 3, 5]);
  });
  it('inspects array and intersects with values', () => {
    const array = [2, 4, -6, 7, 8];
    const values = [2, 3, -6, 9];
    expect(intersection(array, values)).toEqual([2, -6]);
  });
  it('inspects array and intersects with values', () => {
    const array = ['pins', 'cups', 'spoons'];
    const values = ['clothes', 'cups', 'tables'];
    expect(intersection(array, values)).toEqual(['cups']);
  });
  it('inspects array and intersects with values', () => {
    const array = ['pins', 0.5, 'spoons', 2];
    const values = [0.5, 'pins', 'tables', 3];
    expect(intersection(array, values)).toEqual(['pins', 0.5]);
  });
  it('inspects array and intersects with values', () => {
    const array = [0.5, '', 2];
    const values = [1, '', 3];
    expect(intersection(array, values)).toEqual(['']);
  });
});

describe('Finds errors when intersecting 2 arrays', () => {
  it('should return type error if one argument is not an array', () => {
    const array = 'home';
    const values = [2, 4, 6, 8];
    expect(() => intersection(array, values)).toThrow(TypeError);
  });
  it('should return type error if both arguments are not', () => {
    const array = 'home';
    const values = 'movies';
    expect(() => intersection(array, values)).toThrow(TypeError);
  });
});
