const user = localStorage.getItem('user');
if (!user) {
    window.location.href = '../index.html';
} else {
    fetchHighScores();
    console.log(localStorage.getItem("user"));
    fetchScoreData(localStorage.getItem('user'));
    addPlayAgainListener();
}

function addPlayAgainListener() {
    const button = document.getElementById('play-again-button');
    button.addEventListener('click', function() {
        window.location.href = '../select.html';
    })
}


async function fetchScoreData(username) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://geo-trumps-api.onrender.com/players/${username}`, options)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        const userdata = {
            user: data.user,
            score: data.score
        };
        const scoreElement = document.getElementById("player-score");
        scoreElement.innerHTML = data.score;
        console.log(username);
    })
}


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
        name1Element.innerHTML = data[0]["user"]
        score1Element.innerHTML = data[0]["score"]

        const name2Element = document.getElementById("name2")
        const score2Element = document.getElementById("score2")
        name2Element.innerHTML = data[1]["user"]
        score2Element.innerHTML = data[1]["score"]

        const name3Element = document.getElementById("name3")
        const score3Element = document.getElementById("score3")
        name3Element.innerHTML = data[2]["user"]
        score3Element.innerHTML = data[2]["score"]

        const name4Element = document.getElementById("name4")
        const score4Element = document.getElementById("score4")
        name4Element.innerHTML = data[3]["user"]
        score4Element.innerHTML = data[3]["score"]

        const name5Element = document.getElementById("name5")
        const score5Element = document.getElementById("score5")
        name5Element.innerHTML = data[4]["user"]
        score5Element.innerHTML = data[4]["score"]

    })
}