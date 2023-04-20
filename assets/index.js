const form = document.getElementById('login-form')

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    console.log(`Username: ${username.value}`)
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Check for username
    if (username.value === '') {
        alert("username must be present");
    } if (password.value === '') {
            alert("password must be present");}
     else {
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
    await fetch(`https://geo-trumps-api.onrender.com/players/${username.value}/${password.value}`, options)
        .then(processResponse)
        .then(data => {
            console.log(data);

            localStorage.setItem('user', data.user);

            window.location.href = '../select.html';
        })
        .catch(err => console.log(err))
}
function processResponse(resp) {
    if (resp.ok) {
      return resp.json();
    } else {
      alert("Password is incorrect :(");

      throw "Error: http status code = " + resp.status;
    }
}