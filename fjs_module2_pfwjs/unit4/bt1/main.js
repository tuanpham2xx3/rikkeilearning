const inputEl = document.getElementById("user-input");
const output = document.getElementById("output");

inputEl.addEventListener("keydown", (e) => {
  const p = document.createElement("p");
  p.textContent = e.key;
  output.appendChild(p);
});
