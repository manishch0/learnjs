const validationForm = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailRegax = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
  let passwordRegax = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (emailRegax.test(email)) {
    document.getElementById("errorMsgEmail").innerHTML = "";
  } else {
    document.getElementById("errorMsgEmail").innerHTML =
      "Email is not vaildate ";
    return false;
  }
  if (passwordRegax.test(password)) {
    document.getElementById("errorPassword").innerHTML = "";
  } else {
    document.getElementById("errorMsgEmail").innerHTML =
      "Pasword is not in correct format capital and small and special char";
    return false;
  }
};
