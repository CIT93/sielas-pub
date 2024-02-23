const TBL = document.getElementById("tab-data");
const table = renderTblHeading();
const FORM = document.getElementById("form");

function renderTblHeading(data) {
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
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(data) {
  TBL.appendChild(table);
  const firstName = FORM.firstname.value;
  const numberInHousehold = FORM.numberinhousehold.value;
  const houseSize = FORM.housesize.value;

  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  data.forEach(function (text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.append(firstName);
    tr.append(numberInHousehold);
    tr.append(houseSize);
    tr.appendChild(td);
    
  });
  // I understand why we got the error, its because the td is only in the block scope, so to make it available to the whole function you I just copy paste it outside the block.

  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  console.log(table);
  
}
 
export { renderTbl, renderTblHeading };
