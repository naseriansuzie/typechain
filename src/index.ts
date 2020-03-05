class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const suzie = new Human("suzie", 20, "female");

const sayHi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} years old, you are a ${person.gender}!`;
};

console.log(sayHi(suzie));

export {};
