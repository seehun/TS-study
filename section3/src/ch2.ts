// unknown

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "a";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  //   let num:number = unknownVar  -> 다운캐스팅 오류
}

//never
// 어떤 타입의 변수에도 never가능
// never타입에는 어떤 타입의 변수도 안됨

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();

  // let never1:never =10   ->다운캐스팅 오류
}

//void
//void > undefined
function voidExam() {
  function voidFunc(): void {
    console.log("a");
  }

  let voidVar: void = undefined;
}

//any
//모든 타입의 부모타입이 될 수도 있고, 모든 타입의 자식타입이 될 수도 있음

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; //자기한테 오는 다운캐스팅 가능

  undefinedVar = anyVar; //자기가 다운캐스팅 하는것도 가능

  // neverVar = anyVar   -> never에는 어떤 타입도 다운캐스팅 할 수 없음
}
