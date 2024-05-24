// 함수 타입 표현식

type Operation = (a: number, b: number) => number; //매개변수, 반환값

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;

//호출 시그니처
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
