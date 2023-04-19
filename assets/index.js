const loginButton = document.getElementById('login-button');
const username = document.getElementById('username');
const password = document.getElementById('password');

loginButton.addEventListener('submit', login())

async function login() {
        // Request options
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Fetch user data from api
    await fetch(`https://geo-trumps-api.onrender.com/players/${username}`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    console.log("logging in...")
    
}