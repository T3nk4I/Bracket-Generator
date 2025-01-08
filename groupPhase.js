// Initial array of prototypes
let names = [/* cSpell:disable */
    "Titanoid", "Cytronic", "Helionix", "Gearus", "Pulsar-X", "Automatrix", 
    "Fluxion", "Metabot", "Draxon", "Voltis", "Aegiron", "Quantum-Bot", 
];
// New array with Point data
let tableArray = names.map(name => ({
    Name: name,
    Victories: "-",
    Defeats: "-",
    Points: '-'
}));

console.clear();
console.log(tableArray);
var modal = document.getElementById("modalSettings");

// Get the button that opens the modal
var btn = document.getElementById("btnSettings");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('select-num').addEventListener("change", function(){
    const chunkSize = parseInt(this.value);
    generateGroups(chunkSize);
});


function generateGroups(chunkSize){
    let groupNumber = 1;
    const tableBody = document.getElementById("myTable");
    tableBody.innerHTML = "";
    for (let i = 0; i < tableArray.length; i += chunkSize){
        const chunk = tableArray.slice(i, i + chunkSize);
        console.log(chunk);
        tableBody.innerHTML += `<tr><td colspan="4" style="background-color:#EB5E28; color:white; text-align:center;">Grupo ${groupNumber}</td></tr>`;
        buildTable(chunk);
        tableBody.innerHTML += `<button id="show" type="button" onclick="showMatchNumber()">Show Matches</button>`;
        groupNumber++;
    }
}

//0.5n(n-1) equation for how many matches in a group of n contestant
function showMatchNumber (){
    let n = parseInt(document.getElementById('select-num').value);
    const matches = 0.5*n*(n-1);
    alert("The number of matches in this group is", matches);
}

function buildTable(data){
    var table = document.getElementById('myTable');
    for (let i = 0; i < data.length; i++) {
        var row =    
        `
        <tr>
            <td>${data[i].Name}</td>
            <td>${data[i].Victories}</td>
            <td>${data[i].Defeats}</td>
            <td>${data[i].Points}</td>
        </tr>
        `;
        table.innerHTML += row;
    }
}