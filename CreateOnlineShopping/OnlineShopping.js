const ProductPage = document.getElementById("result");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    products.map((product) => {
      const card = document.createElement("div");
      card.classList.add("ProductCard");

      const image = document.createElement("img");
      image.src = product.image;
      image.width = "107";
      card.appendChild(image);

      const name = document.createElement("h1");
      name.textContent = product.title;
      card.appendChild(name);

      const price = document.createElement("h3");
      price.textContent = `$${product.price}`;
      card.appendChild(price);

      const Input = document.createElement("input");
      Input.type = "number";
      card.appendChild(Input);

      const Button = document.createElement("button");
      Button.textContent = "Add to Cart";

      Button.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
          id: product.id,
          name: product.title,
          price: product.price,
        });

        localStorage.setItem("cart", JSON.stringify(cart));
      });

      card.appendChild(Button);

      ProductPage.appendChild(card);
    });
  });
