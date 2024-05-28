// keyof

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  //keyof Person -> "name" | "age"
  return person[key];
}

// Typeof와 Keyof 함께 사용하기

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}
