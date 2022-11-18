const difference = (arr1, arr2) => {
  const uniqueArr = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item) && !uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
};

export default difference;
