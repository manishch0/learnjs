const localStorageData = document.getElementById("result");

const data = JSON.parse(localStorage.getItem("data") || []);

data.map((e) => {
  const row = document.createElement("tr");
  const FirstName = document.createElement("td");
  FirstName.textContent = e.FirstName;
  row.appendChild(FirstName);
});
localStorageData.appendChild(row);
