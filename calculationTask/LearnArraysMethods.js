const items = [
  {
    name: "Books",
    Price: 200,
  },
  {
    name: "Bike",
    Price: 500,
  },
  {
    name: "Tv",
    Price: 5000,
  },
  {
    name: "Pen",
    Price: 10,
  },
];
const FilterItems = items.filter((item) => {
  return item.Price >= 100;
});
console.log(FilterItems);

const Person = [
  {
    name: "Rohit",
    Gender: "M",
  },
  {
    name: "Rajat",
    Gender: "M",
  },
  {
    name: "Vai",
    Gender: "F",
  },
  {
    name: "Shubham",
    Gender: "M",
  },
];
const Data = Person.filter((Persons) => {
  return Persons.Gender === "F";
});
console.log(Data);
