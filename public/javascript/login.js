// const { response } = require("express");
var loggedIn;


async function redirectHandler(event) {
    document.location.replace('/main');
};

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email_address').value.trim();
    const password = document.querySelector('#password').value.trim();
    

    const apiURL = `https://crexendo-ndp-021-las.cls.iaas.run/ns-api/oauth2/token/?grant_type=password&client_id=archertest&client_secret=90056b1f11f8c87fff30fd1b5acafd04&username=${email}&password=${password}`

    if (email && password) {
            response = await fetch(apiURL, {
            method: 'GET'
        }).then(response => response.json())
        .then(data => {
            
            let token = data.access_token;
            let oldAccess = localStorage.getItem('NS_access');
            if (oldAccess) {
                localStorage.removeItem('NS_access');
            }


            localStorage.setItem('NS_access', token);
            document.cookie = `access_token=${token};path=/;`
        }).then(redirectHandler);
    } else { alert('Please enter valid Username and Password!'); }

};


document.querySelector('#login_form').addEventListener('submit', loginFormHandler);
