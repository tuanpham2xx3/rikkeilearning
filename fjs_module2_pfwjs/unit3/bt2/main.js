const w = Number(prompt("Nhập chiều rộng w: "));
const h = Number(prompt("Nhập chiều cao h: "));

let output = "";

for (let row = 1; row <= h; row++) {
  let line = "";

  for (let col = 1; col <= w; col++) {
    line += "*";
  }

  output += line + "\n";
}

console.log(output);
