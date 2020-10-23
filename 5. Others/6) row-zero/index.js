function rowZero(str) {
  const arr = str.match(/0+/g);
  if (!arr) return 0;

  const newArr = arr.map((el) => el.length);
  return Math.max.apply(null, newArr);
}

window.rowZero = rowZero;

export default rowZero;
