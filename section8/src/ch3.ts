interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

type PartialUser = {
  id?: number;
  name?: string;
  age?: number;
};
// PartialUser와 동일
type PartialUser2 = {
  [key in keyof User]?: User[key];
};

function updateUser(user: PartialUser2) {
  // ... 유저 정보 수정 기능
}

//age만 수정하고 싶은 경우
updateUser({ age: 25 });

type readonlyUser = {
  [key in keyof User]: User[key];
};
