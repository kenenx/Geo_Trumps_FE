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
    const Flag = atob(country);
    const FlagImg = document.getElementById("player-flag-image");
    FlagImg.outerHTML +=Flag;
}

function getCpuFlag (country) {
    const Flag = atob(country);
    const FlagImg = document.getElementById("cpu-flag-image");
    FlagImg.outerHTML +=Flag;
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


//Compare results
// if(choice === "life"){
//     console.log("hello life");
// } else if (choice === "area"){
//     console.log("hello area");
// } else if (choice === "temp"){
//     console.log("hello temp");
// } else if (choice === "population"){
//     console.log("hello pop");
// } else if (choice === "independence"){
//     console.log("hello indy");
// }


let cpuValue = 0;
let playerValue = 0;

async function fetchCpuCountryCompare(country) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            cpuValue = data[choice];
            console.log("asyn cpu " + cpuValue)
        })
        .catch(err => console.log(err));
}

async function fetchPlayerCountryCompare(country) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            playerValue = data[choice];
            console.log("player cpu " + playerValue)
        })
        .catch(err => console.log(err));
}

fetchCpuCountryCompare(cpu)
fetchPlayerCountryCompare(player)
console.log("cpu " + cpuValue)
console.log("player " + playerValue)
