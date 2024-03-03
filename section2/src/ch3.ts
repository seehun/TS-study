//object
//property의 타입을 모두 정의해준다
let user: {
  id?: number; //? -> 선택적 property
  name: string;
} = {
  id: 1,
  name: "a",
};

user = {
  name: "b",
};

let config: {
  readonly apiKey: string; //값 바꾸지 못하게함
} = {
  apiKey: "My API KEY",
};

// config.apiKey = 'hacked'   // 오류
