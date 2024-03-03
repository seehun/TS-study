//타입 별칭
//코드 중복 방지

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
};

let user: User = {
  id: 1,
  name: "abc",
  nickname: "asdf",
  birth: "19990821",
  bio: "hi",
};

let user2: User = {
  id: 2,
  name: "abcdef",
  nickname: "asdasdff",
  birth: "19990811",
  bio: "hi",
};

//인덱스 시그니처
//key 와 타입을 기준으로 객체를 정의
type countryCodes = {
  [key: string]: string;
};
let countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  Japan: "jp",
  // china : 1,   오류
};
