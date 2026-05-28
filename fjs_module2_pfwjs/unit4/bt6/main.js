const colors = ["red", "blue", "green", "yellow", "purple"];
const changeBackgroundButton = document.querySelector("#change-background");
const currentColor = document.querySelector("#current-color");

changeBackgroundButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
