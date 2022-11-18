# split-object

## Strategy

- I chose to used `.map` method because it be easily used to iterate over all
  elements in an array,resulting in a new array

---

## Implementation

-`.map` method allows us to loop through every element in the original array,
perform an action and then generate a new Array based on our actions.

-I could have used `forEach` how the this method doesn't return anything of an
array but .map function will give us a new array built out of all the return
values.

## Use Cases

.map((key) returns an iterator object that contains key/value pair for each
element present in the Map object.

```js
const splitObject = (toSeparate) => {
  if (typeof toSeparate !== 'object') {
    throw Error();
  }
  ``newArr`` is the new array that is returned after the function is applied.


  const newArr = Object.keys(toSeparate).map((key) => ({
    [key]: toSeparate[key],
  }));
  return newArr;
};
```

## Inspiration

[This article from developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
