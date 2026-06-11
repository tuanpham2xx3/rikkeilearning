function identity<T>(arg: T): T {
  return arg;
}

interface Box<T> {
  content: T;
}

const stringValue = identity<string>("Hello TypeScript");
const numberValue = identity<number>(100);

const stringBox: Box<string> = {
  content: "Generic Box",
};

const numberBox: Box<number> = {
  content: 200,
};

console.log(stringValue);
console.log(numberValue);
console.log(stringBox);
console.log(numberBox);
