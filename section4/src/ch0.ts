//함수 타입

//어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반화하는지

function func(a: number, b: number): number {
  return a + b;
}

//화살표 함수
const add = (a: number, b: number): number => a + b;

//함수의 매개변수

function introduce(name = "sehun", tall?: number) {
  //tall? -> 선택적 매개변수
  console.log(name);

  if (typeof tall === "number") {
    console.log(tall + 10);
  }
}

introduce("sehun", 170);
introduce("sehun");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((e) => {
    sum += e;
  });
  return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
