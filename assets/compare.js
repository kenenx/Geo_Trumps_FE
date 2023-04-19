async function fetchPlayerCountryData(country) {
    // Request options
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Fetch user data from api
    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            getPlayerCountry(data["country"])
            getPlayerFlag(data["flag_base64"])
            getPlayerExpectancy(data["expectancy"])
            getPlayerArea(data["area"])
            getPlayerTemp(data["temperature"])
            getPlayerPopulation(data["population"])
            getPlayerIndependence(data["independence"])
        })
        .catch(err => console.log(err))
}


async function fetchCpuCountryData(country) {
    // Request options
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Fetch user data from api
    await fetch(`https://geo-trumps-api.onrender.com/countries/${country}`, options)
        .then(res => res.json())
        .then(data => {
            getCpuCountry(data["country"])
            getCpuFlag(data["flag_base64"])
            getCpuExpectancy(data["expectancy"])
            getCpuArea(data["area"])
            getCpuTemp(data["temperature"])
            getCpuPopulation(data["population"])
            getCpuIndependence(data["independence"])
        })
        .catch(err => console.log(err))
}



//Import flag from db
function getPlayerCountry (data) {
    const name = document.getElementById("player-att-country")
    name.outerHTML += data
}

function getCpuCountry (data) {
    const name = document.getElementById("cpu-att-country")
    name.outerHTML += data
}


function getPlayerFlag (country) {
    const Flag = atob(country)
    const FlagImg = document.getElementById("player-flag-image")
    FlagImg.outerHTML +=Flag 
}

function getCpuFlag (country) {
    const Flag = atob(country)
    const FlagImg = document.getElementById("cpu-flag-image")
    FlagImg.outerHTML +=Flag 
}

function getPlayerExpectancy(data){
    const expectancy = document.getElementById("player-att-life")
    expectancy.outerHTML += data
}

function getCpuExpectancy(data){
    const expectancy = document.getElementById("cpu-att-life")
    expectancy.outerHTML += data
}

function getPlayerArea(data){
    const expectancy = document.getElementById("player-att-area")
    expectancy.outerHTML += data
}

function getCpuArea(data){
    const expectancy = document.getElementById("cpu-att-area")
    expectancy.outerHTML += data
}

function getPlayerTemp(data){
    const expectancy = document.getElementById("player-att-temp")
    expectancy.outerHTML += data
}

function getCpuTemp(data){
    const expectancy = document.getElementById("cpu-att-temp")
    expectancy.outerHTML += data
}

function getPlayerPopulation(data){
    const expectancy = document.getElementById("player-att-population")
    expectancy.outerHTML += data
}

function getCpuPopulation(data){
    const expectancy = document.getElementById("cpu-att-population")
    expectancy.outerHTML += data
}

function getPlayerIndependence(data){
    const expectancy = document.getElementById("player-att-independence")
    expectancy.outerHTML += data
}

function getCpuIndependence(data){
    const expectancy = document.getElementById("cpu-att-independence")
    expectancy.outerHTML += data
}

fetchPlayerCountryData("France")
fetchCpuCountryData("Brazil")