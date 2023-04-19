// Country display elements
const countryName = document.getElementById('player-country');
const cpuCountryName = document.getElementById('cpu-country');
const life = document.getElementById('att-life');
const area = document.getElementById('att-area');
const temp = document.getElementById('att-temp')
const population = document.getElementById('att-population');
const independence = document.getElementById('att-independence');

const user = localStorage.getItem('user');
if (!user) {
    window.location.href = '../index.html';
} else {
    startGame();
    addAttributeListeners();
}



function addAttributeListeners() {
    addListener(life, 'life');
    addListener(area, 'area');
    addListener(temp, 'temp');
    addListener(population, 'population');
    addListener(independence, 'independence');
}

function addListener(element, attribute) {
        element.addEventListener('click', function() {
        localStorage.setItem('choice', attribute);
        window.location.href = '../compare.html';
    })
}

async function startGame() {

    let playerCountry = await fetchCard();
    let cpuCountry = await fetchCard();
    
    // If the countries are the same change cpu country
    while (playerCountry.country === cpuCountry.country) {
        cpuCountry = await fetchCard();
    }
    fillPlayerCountry(playerCountry);
    fillCpuCountry(cpuCountry);
    localStorage.setItem('playerCountry', playerCountry.country);
    localStorage.setItem('cpuCountry', cpuCountry);

}

async function fetchCard() {
    let country;
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    }

    await fetch('https://geo-trumps-api.onrender.com/countries/random', options)
        .then(res => res.json())
        .then(data => country = data)
        .catch(err => console.log(err))
    return country;
}

function fillPlayerCountry(newCountry) {
    countryName.textContent = newCountry["country"];
    life.textContent = newCountry["expectancy"];
    area.textContent = newCountry["area"];
    temp.textContent = newCountry["temperature"];
    population.textContent = newCountry["population"];
    independence.textContent = newCountry["independence"]
}

function fillCpuCountry(newCountry) {
    cpuCountryName.textContent = newCountry["country"];
}
