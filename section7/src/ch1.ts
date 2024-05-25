//1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

//2
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string

//3
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]);
// number

//4 타입 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

// getLength(undefined); // ❌

// getLength(null); // ❌
