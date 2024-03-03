//객체 타입의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "lion",
  color: "red",
};

let dog: Dog = {
  name: "asdf",
  color: "brown",
  breed: "말티즈",
};

animal = dog;

// dog = animal  ->오류

// Animal > Dog  => Animal이 부모타입
//name, color가 있으면 Animal 타입으로 봐줄게
//name, color, breed가 있으면 Dog타입으로 봐줄게

let animal2: Animal = {
  name: "a",
  color: "red",
  // breed:'abc'  안됨 , 초과 프로퍼티 검사 때문에
};
