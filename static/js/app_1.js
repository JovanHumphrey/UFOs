// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    // Clear data in table
    tbody.html("");
    // use forEach loop for each data Row in the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Add value to the data row
         Object.values(dataRow).forEach((val) => {
            // Append data to table
             let cell = row.append("td");
             cell.text(val);
             }
         );
    });
}

//Add Filter function
function handleClick() {
    // Look for date time value from web page
    let date = d3.select("#datetime").property("value");
    // Default data
    let filteredData = tableData;
    // If date is already set then use that date as filter. 
    // If not, then return the default data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
