
function stingReverse() {
    return this.split("").reverse().join("");
}

String.prototype.reverse = stingReverse;
/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */
