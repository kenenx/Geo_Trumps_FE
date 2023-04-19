async function fetchScoreData(user) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://geo-trumps-api.onrender.com/players/${user}`, options)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        const userdata = {
            user: data.user,
            score: data.score
        };
        const scoreElement = document.getElementById("player-score")
        scoreElement.textcontent = userdata['score']
        // console.log(userdata["score"])
    })
}

// fetchScoreData("Kenen")

async function fetchHighScores(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://geo-trumps-api.onrender.com/players/`, options)
    .then(resp => resp.json())
    .then(data => {
        data.sort((a,b) => (a.score < b.score ? 1 : -1))
        console.log(data)
        console.log(data[0]["user"])
        const name1Element = document.getElementById("name1")
        name1Element.textcontent = data[0]["user"]

    })
}

fetchHighScores()