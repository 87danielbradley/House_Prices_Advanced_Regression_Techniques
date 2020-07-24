// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(ufoReport => {
	var row = tbody.append("tr");
	row.append("td").text(ufoReport.datetime);
	row.append("td").text(ufoReport.city);
	row.append("td").text(ufoReport.state);
	row.append("td").text(ufoReport.country);
	row.append("td").text(ufoReport.shape);
	row.append("td").text(ufoReport.durationMinutes);
	row.append("td").text(ufoReport.comments);
});

var button = d3.select("#filter-btn");





button.on("click", runEnter);


function runEnter() {
	
	
	d3.event.preventDefault();
	tbody.html("");
	var inputDate = d3.select("#datetime");
	var inputCity = d3.select("#city");
	var inputState = d3.select("#state");
	var inputCountry = d3.select("#country");
	var inputShape = d3.select("#shape");
	
	
	var dateValue = inputDate.property("value");
	var cityValue = inputCity.property("value");
	var stateValue = inputState.property("value");
	var countryValue = inputCountry.property("value");
	var shapeValue = inputShape.property("value");
	
	console.log(dateValue);
	if (cityValue === "") {console.log("The cell is  blank");};

	console.log(cityValue);
	console.log(stateValue);
	console.log(countryValue);
	console.log(shapeValue);
	

	var filteredData = tableData
	
	if (dateValue !== ""){
		filteredData = filteredData.filter( ufo => ufo.datetime === dateValue);}
	if (cityValue !== ""){
		filteredData = filteredData.filter( ufo => ufo.city === cityValue);}
	if (stateValue !== ""){
		filteredData = filteredData.filter( ufo => ufo.state === stateValue);}
	if (countryValue !== ""){
		filteredData = filteredData.filter( ufo => ufo.country === countryValue);}
	if (shapeValue !== ""){
		filteredData = filteredData.filter( ufo => ufo.shape === shapeValue);}
	
	console.log(filteredData);
	
	filteredData.forEach(ufoReport => {
		var filteredRow = tbody.append("tr");
		filteredRow.append("td").text(ufoReport.datetime);
		filteredRow.append("td").text(ufoReport.city);
		filteredRow.append("td").text(ufoReport.state);
		filteredRow.append("td").text(ufoReport.country);
		filteredRow.append("td").text(ufoReport.shape);
		filteredRow.append("td").text(ufoReport.durationMinutes);
		filteredRow.append("td").text(ufoReport.comments);
	});
	
	
};




	


