function isOdd(a) {
  let a = promt("Введите число!")
  if (a % 2 ==  0) {
  	alert(True)
  } else {
  	alert(False)
  }

}

alert(isOdd(a))

window.isOdd = isOdd;

export default isOdd;
