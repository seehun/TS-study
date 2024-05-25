interface KeyPair<K, V> {
  key: K;
  value: V;
}

let key1: KeyPair<string, number> = {
  key: "1",
  value: 1,
};

interface KeyPair2<V> {
  [key: string]: V;
}

let key2: KeyPair2<boolean> = {
  key: true,
};

//제네릭 인터페이스 활용 예제

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
