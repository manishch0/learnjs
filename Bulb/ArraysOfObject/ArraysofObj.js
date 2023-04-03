const cart = [
  {
    name: "tshirt",
    cost: 600,
    color: "red",
    hasDiscount: true,
    discountPercentage: 30,
    category: "clothing",
  },
  {
    name: "jeans",
    cost: 1200,
    color: "blue",
    hasDiscount: false,
    category: "clothing",
  },
  {
    name: "hoodie",
    cost: 900,
    color: "mustard yellow",
    hasDiscount: true,
    discountPercentage: 20,
    category: "clothing",
  },
  {
    name: "shoes",
    cost: 3000,
    color: "black",
    hasDiscount: true,
    discountPercentage: 40,
    category: "Apparel Accessories",
  },
  {
    name: "perfume",
    cost: 2200,
    color: "",
    hasDiscount: false,
    category: "Apparel Accessories",
  },
  {
    name: "watch",
    cost: 4500,
    color: "black",
    hasDiscount: false,
    category: "Apparel Accessories",
  },
];

// Q1  From the given cart. filter out only the clothing category items.
// and print it in the console.(Entire Array).

const ClothingFilter = cart.filter((e) => {
  if (e.category === "clothing") {
    return e.category;
  }
});

// console.log(ClothingFilter);

// Q2 From the given cart. Create a new array of only those products
// which have discounts applicable on them.

const DiscountFilter = cart.filter((e) => {
  if (e.hasDiscount === true) return true;
});
// console.log(DiscountFilter);

// Q3 From the array obtained from the above example(from question no.2 products with discounts),
// calculate the new price of each item after giving the discount and store it in a
// new array (discount depends on product to product and can be seen in discountPercentage property).

const ProductDiscount = cart.filter((e) => {
  let newArr = [];
  if (e.hasDiscount === true) {
    newArr = [...newArr, e];
  }
  console.log(newArr);
  const data = newArr.map((e) => {
    // console.log(e.cost);
    const costs = e.cost;
    const discount = e.discountPercentage;
    const cal = (costs / 100) * discount;
    const total = costs - cal;
    console.log(total);
  });
  //   console.log(data);
});
console.log(ProductDiscount);

// Q4 Calzculate the total cost of the cart and print it in the console with the appropriate message.

// Q5 Calculate the GST (10%) Amount of each item and display it in the console in an array.

const Gst = cart.map((e) => {
  if (e.discountPercentage) {
    console.log(e.discountPercentage);
  }
});
// Q6 From the above-obtained array of cartGST. Calculate the total GST amount only.

const CartGst = cart.filter((e) => {
  let newArr = [];
  if (e.hasDiscount === true) {
    newArr = [...newArr, e];
  }
  console.log(newArr);
  const data = newArr.map((e) => {
    const costs = e.cost;
    const Gst = 10;
    const cal = (costs / 100) * Gst;
    const total = costs - cal;
    console.log(total);
  });
  //   console.log(data);
});
//   console.log();

// Q7 From the given cart, find the first product of the category Apparel Accessories and print its name in the console.

const ApparealAccessories = cart.map((e) => {
  if (e.category === "Apparel Accessories") {
    console.log(e.category);
  }
});
// console.log(ApparealAccessories);
