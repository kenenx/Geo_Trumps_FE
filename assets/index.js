const form = document.getElementById('login-form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    login()
})

async function login() {
    
        // Request options
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Fetch user data from api
    await fetch(`https://geo-trumps-api.onrender.com/players/${username}`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

        
    window.location.href = "../select.html";
    
}