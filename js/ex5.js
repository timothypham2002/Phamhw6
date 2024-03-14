for (var i = 0; i < 12; i++) {
  var output = document.getElementById("output");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerText = i + 1;
  tr.appendChild(td);
  output.appendChild(tr);
  if ((i + 1) % 4 == 0) {
    td.classList.add("table")
  }
}

