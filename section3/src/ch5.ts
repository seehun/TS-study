//타입 추론

//초기값으로 추론
let a = 10; //number로 추론
let b = "asdf"; //string으로 추론

//함수는 반환값 기준 추론
function func() {
  //string으로 추론
  return "hello";
}

const num = 10; // literal number type으로 추론

let arr = [1, "asdf"]; //(number | string)으로 추론
