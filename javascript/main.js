import { validate } from "./function.js";

const firstname = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const form = document.getElementById("form");
const button = document.getElementById("button");


button && button.addEventListener("click", function (e) {
    e.preventDefault();
    if (validate({ firstname, email, username, password, repassword })) {
        let user = {
            name: firstname.value,
            email: email.value,
            username: username.value,
            password: password.value
        };

        localStorage.setItem('user', JSON.stringify(user));

        fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == "User registered successfully!") {
                    let domain = window.location.href.substring(0, window.location.href.search("pages"));
                    window.location.assign(`${domain}pages/login.html`)
                }
                if (data.message == "Failed! Username is already in use!") {
                    alert("Failed! Username is already in use!");
                    username.focus();
                    password.value = '';
                }
                if (data.message == "Failed! Email is already in use!") {
                    alert("Failed! Email is already in use!");
                    email.focus();
                    password.value = '';
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
})