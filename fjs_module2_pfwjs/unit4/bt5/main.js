const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
