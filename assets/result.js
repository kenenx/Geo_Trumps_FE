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

        const name1Element = document.getElementById("name1")
        const score1Element = document.getElementById("score1")
        name1Element.textcontent = data[0]["user"]
        score1Element.textcontent = data[0]["score"]

        const name2Element = document.getElementById("name2")
        const score2Element = document.getElementById("score2")
        name2Element.textcontent = data[1]["user"]
        score2Element.textcontent = data[1]["score"]

        const name3Element = document.getElementById("name3")
        const score3Element = document.getElementById("score3")
        name3Element.textcontent = data[2]["user"]
        score3Element.textcontent = data[2]["score"]

        const name4Element = document.getElementById("name4")
        const score4Element = document.getElementById("score4")
        name4Element.textcontent = data[3]["user"]
        score4Element.textcontent = data[3]["score"]

        const name5Element = document.getElementById("name5")
        const score5Element = document.getElementById("score5")
        name5Element.textcontent = data[0]["user"]
        score5Element.textcontent = data[0]["score"]

    })
}

fetchHighScores()