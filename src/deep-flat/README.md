# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */
```

> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)

---

## Strategy

I chose to used flat array method to solve this challenge because this is the
easiest solution and this is nice to read.

## Implementation

- the `.flat(depth)` method returns new array in which all elements of nested
  subarrays have been recursively "raised" to the specified depth level.
- I can use depth = 5, based on the examples in "Docstring", but I think better
  use depth = Infinity, because it will converts a nested array into a single
  array without nesting no matter how much nesting.

---

## Use Cases

You could use this array in any case when you need to get single array without
nesting.

```js
const weekTemperature = [1, [-2, [3, [8, [8, [10, [11]]]]]]];
const singleArrayWeekTemperature = flatDeep(weekTemperature);
console.log(singleArrayWeekTemperature); // [1, -2, 3, 8, 8, 10, 11];
```

---

## Inspiration

[This article from developer.mozilla.org](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
It gave me the my solution.
