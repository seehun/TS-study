//void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  //반환갑 타입이 string
  return "hello";
}

function func2(): void {
  //반환값이 없음
  console.log("hello");
}

let a: void; //undefined , null 저장가능
// a=1  ->오류
a = undefined;

//never
//never -> 존재하지 않는
//불가능한 타입

function func3(): never {
  //반환할 수 없는 함수
  while (true) {}
}

function func4(): never {
  // 실행되면 바로 프로그램 중지
  throw new Error();
}

let b: never; //어떤 값도 저장할 수 없음 ,  undefined, null, any 다 안됨
