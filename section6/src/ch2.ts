class Employee {
  // 필드
  private name: string; // 자동으로 public
  public age: number; // 자동으로 public
  public position: string; // 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동";  오류
employee.age = 30;
employee.position = "디자이너";
