document.addEventListener("DOMContentLoaded", function () {
  const newItemInput = document.getElementById("new-item");
  const addButton = document.getElementById("add-item");
  const todoList = document.getElementById("todo-list");

  if (newItemInput && addButton && todoList) {
    addButton.addEventListener("click", function (event) {
      event.preventDefault();

      const newListItem = document.createElement("li");
      newListItem.innerText = newItemInput.value;
      todoList.appendChild(newListItem);

      newItemInput.value = "";
    });
  }
});
