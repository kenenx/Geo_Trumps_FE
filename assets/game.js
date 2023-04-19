async function startGame() {

    let playerCountry = await fetchCard();
    let cpuCountry = await fetchCard();
    
    // If the countries are the same change cpu country
    while (playerCountry.country === cpuCountry.country) {
        cpuCountry = await fetchCard();
    }
    
    return {
        playersCountry: playerCountry,
        cpusCountry: cpuCountry
    }
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

startGame("kenen")