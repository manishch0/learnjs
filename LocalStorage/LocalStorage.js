const Form = document.querySelector("#PersonForm");
const btnSumbit = document.querySelector("#btnSumbit");
const btnViewDetails = document.querySelector("#btnViewDetails");

let User = [];

if (localStorage.getItem("UserData")) {
  let data = JSON.parse(localStorage.getItem("UserData")) || [];
  console.log(data);

  for (let i = 0; i <= UserData.length; i++) {
    let res = `
    <div>
    <h1>${UserData[i].FirstName}</h1>
    <h1>${UserData[i].Lastname}</h1>

    </div>`;
    $("#result").append(res);
  }
}

btnSumbit.addEventListener("click", (e) => {
  e.preventDefault();
  const FirstName = document.querySelector("#firstName").value;
  const Lastname = document.getElementById("lastName").value;
  const Email = document.getElementById("email").value;
  const PinCode = document.getElementById("pinCode").value;
  const ContactNO = document.getElementById("contactNo").value;
  const Address = document.getElementById("address").value;

  let UserData = {
    FirstName: FirstName,
    Lastname: Lastname,
    Email: Email,
    PinCode: PinCode,
    ContactNO: ContactNO,
    Address: Address,
  };
  User.push(UserData);
  localStorage.setItem("User", JSON.stringify(User));
  console.log(User);
});

// firstName.addEventListener("change", updateValue);
// function updateValue(e) {
//   result.textContent = e.target.value;
// }
// btnViewDetails.addEventListener("click", (e) => {});

// const str = "Hello world";
// const letter = [...str];
// console.log(letter);
// const arr = ["rohit", "rajat", "Manish", "rohit"];
// const data = new Set(letter, "", "d");
// console.log(data);
