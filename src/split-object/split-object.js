export const splitObject = (toSeparate) => {
  if (typeof toSeparate !== 'object') {
    throw Error();
  }
  const newArr = Object.keys(toSeparate).map((key) => ({
    [key]: toSeparate[key],
  }));
  return newArr;
};

export default splitObject;
