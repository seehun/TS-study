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
type countryCodes = {
  Korea: string;
  UnitedState: string;
  Japan: String;
};
let countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  Japan: "jp",
};
