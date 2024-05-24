interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
}

const person: Person = {
  name: "이정환",
  age: 27,
  sayHi() {
    console.log("asdf");
  },
};
