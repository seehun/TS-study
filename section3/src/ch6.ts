//타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; //person으로 간주해라
person.name = "a";
person.age = 12;

type Dog = {
  name: string;
  color: string;
};
let dog = {
  name: "asdf",
  color: "red",
  breed: "진도",
} as Dog; //프로퍼티 초과 검사 오류 막아줌

//타입 단언 규칙
