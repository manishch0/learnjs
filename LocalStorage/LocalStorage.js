const Form = document.querySelector("#PersonForm");
const btnSumbit = document.querySelector("#btnSumbit");
const btnViewDetails = document.querySelector("#btnViewDetails");

Form.addEventListener("click", (e) => {
  e.preventDefault();
});

btnSumbit.addEventListener("click", (e) => {
  const firstName = document.querySelector("#firstName");
  const Lastname = document.getElementById("lastName");
  const Email = document.getElementById("email");
  const PinCode = document.getElementById("pinCode");
  const ContactNO = document.getElementById("contactNo");
  const Address = document.getElementById("address");

  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", Lastname.value);
  localStorage.setItem("email", Email.value);
  localStorage.setItem("pinCode", PinCode.value);
  localStorage.setItem("contactNo", ContactNO.value);
  localStorage.setItem("address", Address.value);
});

firstName.addEventListener("change", updateValue);
function updateValue(e) {
  result.textContent = e.target.value;
}
btnViewDetails.addEventListener("click", (e) => {});
