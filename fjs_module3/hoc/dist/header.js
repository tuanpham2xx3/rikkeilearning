"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const server_1 = require("react-dom/server");
const { writeFileSync } = require("fs");
function Header() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Hello" }), (0, jsx_runtime_1.jsx)("button", { children: "Click" })] }));
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
  ${(0, server_1.renderToStaticMarkup)(headerElement)}
</body>
</html>
`;
writeFileSync("dist/header.html", html);
console.log("Created dist/header.html");
