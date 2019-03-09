// from data.js
var tableData = data;

var tbody = d3.select("#dataTbl");

var filterBtn = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

function loadTbl() {
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
}

function filterDate(dateFind) {
    return dateFind.datetime == inputField.node().value.trim();
}

filterBtn.on("click", function() {

  d3.event.preventDefault();

  tableData = data.filter(filterDate);

  tbody = d3.select("#dataTbl").html("");

  loadTbl();
});

loadTbl();
