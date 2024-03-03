//any
//특정 변수의 타입을 우리가 확실히 모를때
//아무 타입이 될 수 있음

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 10;
unknownVar = () => {};

// num = unknownVar   ->오류  (any와의 차이점)

// unknown 변수는 모든 타입의 변수값으로 사용할 수 없음
// 연산 (+,-,/,*)도 안됨
// toUpperCase같은 메서드도 사용 x
