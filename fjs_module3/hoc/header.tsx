import { renderToStaticMarkup } from "react-dom/server";

declare const require: any;

const { writeFileSync } = require("fs");

function Header() {
  return (
    <div className="card">
      <h2>Hello</h2>
      <button>Click</button>
    </div>
  );
}

const headerElement = Header();
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header</title>
</head>
<body>
  ${renderToStaticMarkup(headerElement)}
</body>
</html>
`;

writeFileSync("dist/header.html", html);

console.log("Created dist/header.html");
