const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Action",
  ];
  // const headingTextArr = [
  //   "Name",
  //   "Footprint",
  // ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e) {
    if(index > -1){
      data.splice(index,1);
      renderTbl(data);
    }
  });
  btnEdit.addEventListener('click', function(e){

  });
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (
        key !== "lastname" &&
        key !== "memberPoints" &&
        key !== "sizePoints"
      ) {
        const td = document.createElement("td"); // creating td
        td.textContent = value; // setting the td's value
        tr.appendChild(td); // appending it to the tr that we created outside
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}
function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  // const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl };