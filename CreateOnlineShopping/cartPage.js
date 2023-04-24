const cartContainer = document.getElementById("cartContainer");

const cart = JSON.parse(localStorage.getItem("cart") || []);

cart.map((item) => {
  const row = document.createElement("tr");

  // Add the item name to the row
  const name = document.createElement("td");
  name.textContent = item.name;
  row.appendChild(name);
  cartContainer.appendChild(row);
});


