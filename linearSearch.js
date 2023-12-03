function linearSearch(arr, target) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [1, 3, 5, 7, 9, 11];
const targetElement = 12;
const result = linearSearch(array, targetElement);

if (result !== -1) {
  console.log(`Izlanayotgan son (${targetElement}), berilgan qatorning ${result}-indeksida topildi.`);
} else {
  console.log(`Izlanayotgan son (${targetElement}) berilgan qatorda topilmadi.`);
}