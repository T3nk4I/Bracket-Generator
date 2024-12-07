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
        tableBody.innerHTML += `<tr><td colspan="4" style="background-color:DodgerBlue; color:white; text-align:center;">Grupo ${groupNumber}</td></tr>`;
        buildTable(chunk);
        tableBody.innerHTML += `<button id="matches">Show Matches</button>`;
        groupNumber++;
    }
}

function showMatches(i){
    tableBody.innerHTML += `<button id="matches">Show Matches</button>`;
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