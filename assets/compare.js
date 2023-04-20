//Check if user has logged in
const user = localStorage.getItem('user');
const player = localStorage.getItem("playerCountry");
const cpu = localStorage.getItem("cpuCountry");
const choice = localStorage.getItem('choice');

if (!user) {
    window.location.href = '../index.html';
} else {
    fetchPlayerCountryData(player);
    fetchCpuCountryData(cpu);
}

//Fetch request from backend
async function fetchPlayerCountryData(country) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            getPlayerCountry(data["country"]);
            getPlayerFlag(data["flag_base64"]);
            getPlayerExpectancy(data["expectancy"]);
            getPlayerArea(data["area"]);
            getPlayerTemp(data["temperature"]);
            getPlayerPopulation(data["population"]);
            getPlayerIndependence(data["independence"]);
        })
        .catch(err => console.log(err));
}


async function fetchCpuCountryData(country) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            getCpuCountry(data["country"]);
            getCpuFlag(data["flag_base64"]);
            getCpuExpectancy(data["expectancy"]);
            getCpuArea(data["area"]);
            getCpuTemp(data["temperature"]);
            getCpuPopulation(data["population"]);
            getCpuIndependence(data["independence"]);
        })
        .catch(err => console.log(err));
}

//Import country information from back end
function getPlayerCountry (data) {
    const name = document.getElementById("player-att-country");
    name.outerHTML += data;
}

function getCpuCountry (data) {
    const name = document.getElementById("cpu-att-country");
    name.outerHTML += data;
}

function getPlayerFlag (country) {
    const flag = atob(country);
    const flagImg = document.getElementById("player-flag-image");
    flagImg.outerHTML +=flag;
}

function getCpuFlag (country) {
    const flag = atob(country);
    const flagImg = document.getElementById("cpu-flag-image");
    flagImg.outerHTML +=flag;
}

function getPlayerExpectancy(data){
    const expectancy = document.getElementById("player-att-life");
    expectancy.outerHTML += data;
}

function getCpuExpectancy(data){
    const expectancy = document.getElementById("cpu-att-life");
    expectancy.outerHTML += data;
}

function getPlayerArea(data){
    const expectancy = document.getElementById("player-att-area")
    expectancy.outerHTML += data
}

function getCpuArea(data){
    const expectancy = document.getElementById("cpu-att-area");
    expectancy.outerHTML += data;
}

function getPlayerTemp(data){
    const expectancy = document.getElementById("player-att-temp");
    expectancy.outerHTML += data;
}

function getCpuTemp(data){
    const expectancy = document.getElementById("cpu-att-temp");
    expectancy.outerHTML += data;
}

function getPlayerPopulation(data){
    const expectancy = document.getElementById("player-att-population");
    expectancy.outerHTML += data;
}

function getCpuPopulation(data){
    const expectancy = document.getElementById("cpu-att-population");
    expectancy.outerHTML += data;
}

function getPlayerIndependence(data){
    const expectancy = document.getElementById("player-att-independence");
    expectancy.outerHTML += data;
}

function getCpuIndependence(data){
    const expectancy = document.getElementById("cpu-att-independence");
    expectancy.outerHTML += data;
}

//Style seleted choice
function changeSelectedStyle(target){
    const playerElement = document.getElementById(`player-id-${target}`)
    playerElement.style.color = "#eee"
    playerElement.style.background = "#442220"

    const cpuElement = document.getElementById(`cpu-id-${target}`)
    cpuElement.style.color = "#eee"
    cpuElement.style.background = "#442220"
}
changeSelectedStyle(choice)


//Compare player and cpu values
async function compareValues(playerCountry, cpuCountry) {
    let cpuValue = 0;
    let playerValue = 0;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await fetch(`https://geo-trumps-api.onrender.com/countries/${playerCountry}`, options)
        .then(res => res.json())
        .then(data => {
            playerValue = data[choice];
        })
        .catch(err => console.log(err));

    await fetch(`https://geo-trumps-api.onrender.com/countries/${cpuCountry}`, options)
        .then(res => res.json())
        .then(data => {
            cpuValue = data[choice];
        })
        .catch(err => console.log(err));

    if(choice === "independence"){
        if(playerValue < cpuValue){
            let winner = document.getElementById("winner-display")
            winner.textContent = user
            updateScore(user)
        } else {
            let winner = document.getElementById("winner-display")
            winner.textContent = "Computer"
        }
    } else {
        if(playerValue > cpuValue){
            let winner = document.getElementById("winner-display")
            winner.textContent = user
            updateScore(user)
        } else {
            let winner = document.getElementById("winner-display")
            winner.textContent = "Computer"
        }
    }
}

async function updateScore(username) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://geo-trumps-api.onrender.com/players/${username}`, options)
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}

compareValues(player, cpu)


