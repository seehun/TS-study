//서로소 유니온 타입
//교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}, ${user.kickCount}`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}, ${user.point}`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}, ${user.visitCount}`);
      break;
    }
  }
}
