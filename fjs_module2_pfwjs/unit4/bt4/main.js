const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const listItem = e.target.parentElement;

    listItem.remove();
  });
});
