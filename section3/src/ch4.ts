//대수 타입

//합집합 - union

let a: string | number;

a = 1;
a = "asd";

let arr: (number | string)[] = [1, "aa"];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  lan: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  lan: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  lan: "",
};
// let union4: Union1={
//     name:''
// }  -> 오류

//교집합

let variable: number & string; //never 타입 -> 둘의 교집합이 없음

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  lan: "",
};
