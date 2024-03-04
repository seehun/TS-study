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

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;  ->오류 , number와 string은 교집합이 없음

//const 단언

let num4 = 10 as const; //const선언한 것과 동일하게 만들어줌

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // readonly 가 됨

//Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "1",
  author: "sehun",
};

const len: number = post.author!.length;
//author값은 null이나 undefined가 아니다
