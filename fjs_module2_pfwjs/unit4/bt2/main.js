const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
const removeLastButton = document.getElementById("remove-last");

addItemButton.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = "New Item";
  itemList.appendChild(item);
});

removeLastButton.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;

  if (lastItem) {
    lastItem.remove();
  }
});
