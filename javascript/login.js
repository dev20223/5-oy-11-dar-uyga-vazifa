import { validateLogin } from "./function.js";

const firstname = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const form = document.getElementById("form");
const button = document.getElementById("button");

button &&
    button.addEventListener("click", function (e) {
        e.preventDefault();
        if (validateLogin({ username, password })) {
            let user = {
                username: username.value,
                password: password.value,
            };

            fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.id && data.accessToken) {
                        localStorage.setItem("token", `${data.accessToken}`);
                        let domain = window.location.href.substring(0, window.location.href.search("pages")
                        );
                        window.location.assign(`${domain}pages/index.html`);
                    }
                    if (data.message == "User Not found.") {
                        alert("User Not found.");
                        username.focus();
                        password.value = "";
                    }
                    if (data.message == "Invalid Password!") {
                        alert("Invalid Password!");
                        email.focus();
                        password.value = "";
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });