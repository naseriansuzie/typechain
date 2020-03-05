const sayHi = (name: string, age: number, gender: string): string => {
  return `hello ${name}, you are ${age} years old, you are a ${gender}!`;
};

console.log(sayHi("suzie", 20, "female"));

export {};
