import {FORM, TBL} from "./global.js";
import {saveLS} from "./storage.js";


function renderTblHeading() {
  // TBL.innerHTML = "";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
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
  
function onUpdate(index, data){
  data.splice(index,1);
  saveLS(data);
  renderTbl(data);
}

function renderTblBtn(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e) {
     onUpdate(index, data);
  });
  btnEdit.addEventListener('click', function(e){
    FORM[1].value = obj.firstname;
    FORM[2].value = obj.lastname;
    FORM[3].value = obj.members;
    FORM[4].value = obj.size;
    onUpdate(index, data);
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
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}
function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}
export { renderTbl };
