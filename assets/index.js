const form = document.getElementById('login-form')

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    console.log(`Username: ${username.value}`)
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Check for username
    if (username.value === '') {
        alert("username must be present");
    } else {
        login();
    }
    
})

async function login() {
    
        // Request options
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }


    // Fetch user data from api
    await fetch(`https://geo-trumps-api.onrender.com/players/${username.value}`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            localStorage.setItem('user', data.user);

            // const userData = {
            //     'user': data.user,
            // };
            // console.log(userData);
            // var queryString = '?' + Object.keys(userData).map(key => key + '=' + userData[key]).join('&');

            // console.log(queryString);

            window.location.href = '../select.html';
        })
        .catch(err => console.log(err))
    
}