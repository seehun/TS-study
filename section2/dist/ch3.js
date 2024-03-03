//object
//property의 타입을 모두 정의해준다
let user = {
    id: 1,
    name: "a",
};
user = {
    name: "b",
};
let config = {
    apiKey: "My API KEY",
};
export {};
// config.apiKey = 'hacked'   // 오류
