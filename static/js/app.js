// from data.js
var tableData = data;

// YOUR CODE HERE!
// table references
const tbody = d3.select("tbody");


function buildTable(data) {
  // Clearing data
  tbody.html("");

  // Next, loop through each object in the data and append rows + values
  data.forEach((dataRow) => {
    const row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
//Button Function
function handleClick() {
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }


  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// Build Table 
buildTable(tableData);
