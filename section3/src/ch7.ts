//타입 좁히기
//조건문 등을 이용해 넓은타입에서 좁은타입으로
//타입을 상화에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person | null) {
  if (typeof value === "number") {
    console.log(value.toFixed()); //value를 number로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //value를 string으로 추론
  } else if (value instanceof Date) {
    // Date만 들어올 수 있음
    console.log(value.getTime()); //value를 Date로 추론
  } else if (value && "age" in value) {
    // 'age'가 value에 있냐  또한 null이 아니다 -> Person
    console.log(`${value.name},${value.age}`); //value를 Person으로 추론
  }
}
