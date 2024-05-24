// 함수 타입 호환성
// 틁정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단

//1. 반환값의 타입이 호환되는가
//2. 매개변수의 타입이 호환되는가

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b=a  - 오류

//기준2. 매개변수가 호환되는가
//2-1 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c=d;    매개변수는 업캐스팅일 때 호환이 안됨
d = c; //다운캐스팅일 떄 된다

//2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1  오류 -> 매개변수가 더 많은 함수를 매개변수가 적은 함수로 취급하려고 하니까
