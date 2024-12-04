// Initial array of prototypes
let names = [
    "Titanoid", "Cytronic", "Helionix", "Gearus", "Pulsar-X", "Automatrix",
    "Fluxion", "Metabot", "Draxon", "Voltis", "Aegiron", "Quantum-Bot",
];

let tableArray = names.map(name => ({
    Name: name,
    Victories: "-",
    Defeats: "-",
    Points: '-'
}))
console.log(tableArray);
buildTable(tableArray);
dropdownSelect();
const chunkSize = 5//parseInt(dropdownSelect());
for (let i = 0; i < tableArray.length; i += chunkSize) {
    const chunk = tableArray.slice(i, i + chunkSize);
    console.log(chunk);
}

function dropdownSelect(){
    document.getElementById('select-num').addEventListener("change", dropdownSelect);
    var selectedValue = document.getElementById('select-num').options[document.getElementById('select-num').selectedIndex].value;
    console.log(selectedValue);
}

function buildTable(data) {
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