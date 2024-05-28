//Exclude
type A = Exclude<string | number, string>;
//number

type Exclude<T, V> = T extends V ? never : T;

//Extract
type B = Extract<string | boolean, boolean>;
// boolean

//ReturnType

type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number
