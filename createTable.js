// Initial array of prototypes
let myArray = [/* cSpell:disable */
    "Titanoid", "Cytronic", "Helionix", "Gearus", "Pulsar-X", "Automatrix",
    "Fluxion", "Metabot", "Draxon", "Voltis", "Aegiron", "Quantum-Bot",
    //"Drivex", "Megacore", "Zycron", "Turbinex", "Chronobot", "Nanobot-X",
    //"Aegisron", "Mechadox", "Synthrax", "Voltronic", "Nexarion", "Gearshift",
    //"Turbobot", "Metallion", "Hexadrone", "Boltix", "Quantumix", "Pulsatrix",
    //"Chronobot", "Deltabot", "Automatax", "Flexiron", "Sparkus", "Helionoid",
    //"Fluxbot", "Coretrix", "Cylindrax", "Dynamo-X", "Oscilbot", "Neutrobot",
    //"Tridentron", "Magnetron", "Axisron", "Gravibot", "Pixelion", "Techrodon",
    //"Protektor", "Glitch-X", "Mechavor", "Parallax", "Optibot", "Helixor",
    //"Ramtron", "Torqueon", "Servo-X", "Cyberbolt", "Electronix",
    //"Mechanor", "Gigadroid", "Nanodroid", "Infernotron", "Hydraxon", "Statrix",
    //"Energex", "Galvantron", "Arcadroid", "Sparkatron", "Obelisk-X", "Turboid",
    //"Refractron", "Omni-Mech", "Cylindrix", "Powerforge", "Voltazoid", "Stormtrax",
    //"Ironwave", "Thunderclank", "Pyrodroid", "Electronom", "Axionix", "Cryptobot", 
    //"Zenithron", "Scalebot", "Radiobot", "Astronix", "Protoforge", "Botanoid",
    //"Mechaflux"
];

// Load from localStorage if available
const storedArray = localStorage.getItem("shuffledArray");
  if (storedArray) {
    myArray = JSON.parse(storedArray);
  } else {
    shuffleArray(myArray);
    saveArrayToLocalStorage();
}

// Add event listener to the dropdown
document.getElementById("select-num").addEventListener("change", function () {
    const chunkSize = parseInt(this.value);
    generateGroups(chunkSize);
});

// Add event listener to the randomize button
document.getElementById("randomize").addEventListener("click", function () {
    shuffleArray(myArray);
    saveArrayToLocalStorage();
    const chunkSize = parseInt(document.getElementById("select-num").value);
    generateGroups(chunkSize); // Regenerate groups with the shuffled array
});

// Add event listener to the update button
document.getElementById("update").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
    const chunkSize = parseInt(document.getElementById("select-num").value);
    generateGroups(chunkSize); // Regenerate groups with the shuffled array
});
generateGroups(parseInt(document.getElementById("select-num").value));

//$('th').on('click', function(){
    //var column =$(this).data('column');
    //var order=$(this).data('order');
    //console.log('column was clicked', column, order);
    //if (order == 'desc') {
        //$(this).data('order', "asc");
        //myArray = myArray.sort((a,b) => a[column] > b[column] ? 1: -1)
    //}else{
        //$(this).data('order', "desc");
        //myArray = myArray.sort((a,b) => a[column] < b[column] ? 1: -1)
    //}
//})

function generateGroups(chunkSize) {
    const tableBody = document.getElementById("myTable");
    tableBody.innerHTML = "";

    let groupNumber = 1;
    for (let i = 0; i < myArray.length; i += chunkSize) {
      const chunk = myArray.slice(i, i + chunkSize);
      tableBody.innerHTML += `<tr><td colspan="4" style="background-color:DodgerBlue; color:white; text-align:center;">Grupo ${groupNumber}</td></tr>`;
      buildTable(chunk, chunkSize, tableBody);
      groupNumber++;
    }
}

function buildTable(data, maxOptions, tableBody) {
    for (let i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data[i]}</td>
        <td>
          <select class="victories">
            ${buildDropdown(maxOptions)}
          </select>
        </td>
        <td>
          <select>
            ${buildDropdown(maxOptions)}
          </select>
        </td>
        <td class="points">0</td>
      `;
      tableBody.appendChild(row);
    }
    attachVictoryListeners();
}

function buildDropdown(maxOptions) {
    let options = "";
    for (let i = 0; i < maxOptions; i++) {
      options += `<option value="${i}">${i}</option>`;
    }
    return options;
}

function attachVictoryListeners() {
    const victoryDropdowns = document.querySelectorAll(".victories");
    victoryDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("change", function () {
        const row = this.closest("tr");
        const pointsCell = row.querySelector(".points");
        pointsCell.textContent = parseInt(this.value) * 3;
      });
    });
}

function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function saveArrayToLocalStorage() {
    localStorage.setItem("shuffledArray", JSON.stringify(myArray));
}
