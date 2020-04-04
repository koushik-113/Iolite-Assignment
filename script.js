window.onload = function () {

var options = {
animationEnabled: true,
title:{
text: ""
},
axisY :{
valueFormatString: "#0,.",
prefix: "$",
suffix: "k",
title: "Sales"
},
toolTip: {
shared: true
},
data: [{
type: "stackedArea",
showInLegend: true,
name: "Central",
xValueFormatString: "MMM YYYY",
yValueFormatString: "$#,###",
dataPoints: [
{ x: new Date(2017, 0), y: 90000 },
{ x: new Date(2017, 1), y: 83000 },
{ x: new Date(2017, 2), y: 97000 },
{ x: new Date(2017, 3), y: 175000 },
{ x: new Date(2017, 4), y: 148000 },
{ x: new Date(2017, 5), y: 93000 },
{ x: new Date(2017, 6), y: 131000 },
{ x: new Date(2017, 7), y: 142000 },
{ x: new Date(2017, 8), y: 156000 },
{ x: new Date(2017, 9), y: 134000 },
{ x: new Date(2017, 10), y: 115000 },
{ x: new Date(2017, 11), y: 98000 }
]
}, {
type: "stackedArea",  
name: "East",
showInLegend: true,
yValueFormatString: "$#,###",
dataPoints: [
{ x: new Date(2017, 0), y: 93000 },
{ x: new Date(2017, 1), y: 99000 },
{ x: new Date(2017, 2), y: 107000 },
{ x: new Date(2017, 3), y: 110500 },
{ x: new Date(2017, 4), y: 114000 },
{ x: new Date(2017, 5), y: 133000 },
{ x: new Date(2017, 6), y: 205000 },
{ x: new Date(2017, 7), y: 192000 },
{ x: new Date(2017, 8), y: 156000 },
{ x: new Date(2017, 9), y: 114000 },
{ x: new Date(2017, 10), y: 99000 },
{ x: new Date(2017, 11), y: 135000 }
]
}, {
type: "stackedArea",  
name: "South",
showInLegend: true,
yValueFormatString: "$#,###",
dataPoints: [
{ x: new Date(2017, 0), y: 123000 },
{ x: new Date(2017, 1), y: 117000 },
{ x: new Date(2017, 2), y: 107000 },
{ x: new Date(2017, 3), y: 98000 },
{ x: new Date(2017, 4), y: 94000 },
{ x: new Date(2017, 5), y: 103000 },
{ x: new Date(2017, 6), y: 121000 },
{ x: new Date(2017, 7), y: 132000 },
{ x: new Date(2017, 8), y: 99700 },
{ x: new Date(2017, 9), y: 104000 },
{ x: new Date(2017, 10), y: 137000 },
{ x: new Date(2017, 11), y: 145000 }
]
}, {
type: "stackedArea",  
name: "West",
//indexLabel: "#total",
yValueFormatString: "$#,###",
showInLegend: true,
dataPoints: [
{ x: new Date(2017, 0), y: 78000 },
{ x: new Date(2017, 1), y: 83000 },
{ x: new Date(2017, 2), y: 67000 },
{ x: new Date(2017, 3), y: 88600 },
{ x: new Date(2017, 4), y: 94000 },
{ x: new Date(2017, 5), y: 73900 },
{ x: new Date(2017, 6), y: 31000 },
{ x: new Date(2017, 7), y: 42000 },
{ x: new Date(2017, 8), y: 56000 },
{ x: new Date(2017, 9), y: 64000 },
{ x: new Date(2017, 10), y: 81000 },
{ x: new Date(2017, 11), y: 105000 }
]
}]
};
var options11 = {
title: {
text: ""
},
data: [{
type: "pie",
startAngle: 45,
showInLegend: "true",
legendText: "{label}",
indexLabel: "{label} ({y})",
yValueFormatString:"#,##0.#"%"",
dataPoints: [
{ label: "Organic", y: 36 },
{ label: "Email Marketing", y: 31 },
{ label: "Referrals", y: 7 },
{ label: "Twitter", y: 7 },
{ label: "Facebook", y: 6 },
{ label: "Google", y: 10 },
{ label: "Others", y: 3 }
]
}]
};
var options2 = {
animationEnabled: true,  
title:{
text: ""
},
axisX: {
valueFormatString: "MMM"
},
axisY: {
title: "Sales (in USD)",
prefix: "$",
includeZero: false
},
data: [{
yValueFormatString: "$#,###",
xValueFormatString: "MMMM",
type: "spline",
dataPoints: [
{ x: new Date(2017, 0), y: 25060 },
{ x: new Date(2017, 1), y: 27980 },
{ x: new Date(2017, 2), y: 33800 },
{ x: new Date(2017, 3), y: 49400 },
{ x: new Date(2017, 4), y: 40260 },
{ x: new Date(2017, 5), y: 33900 },
{ x: new Date(2017, 6), y: 48000 },
{ x: new Date(2017, 7), y: 31500 },
{ x: new Date(2017, 8), y: 32300 },
{ x: new Date(2017, 9), y: 42000 },
{ x: new Date(2017, 10), y: 52160 },
{ x: new Date(2017, 11), y: 49400 }
]
}]
};
$(".chartContainer").CanvasJSChart(options);
$(".chartContainer1").CanvasJSChart(options11);
$(".chartContainer2").CanvasJSChart(options2);

}
$(document).ready( function () {
    $('#myTable').DataTable();
} );