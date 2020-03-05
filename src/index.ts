interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "suzie",
  age: 20,
  gender: "female"
};

const sayHi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} years old, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
