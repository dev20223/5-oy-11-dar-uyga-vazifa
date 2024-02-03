const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const name = document.getElementById("name");
const button = document.getElementById("button");
const form = document.getElementById("form");
const card = document.getElementById("card");

function createRow(userdata) {
    return `
    <ul class="list-group">
    <li class="list-group-item" id="name">Name: ${userdata.name}</li>
    <li class="list-group-item" id="email">Email: ${userdata.email}</li>
    <li class="list-group-item" id="username">Username: ${userdata.username}</li>
    <li class="list-group-item" id="password">Password: ${userdata.password}</li>
  </ul>
  <div class="d-flex gap-3 mt-4 align-items-center">
    <a href:"../register.html" id = "button" type="submit" class="btn btn-danger w-25">Logout</a>
  </div>

    `;
}

function createCard(userdata) {
    return `
    <div class="card mt-3" style="width: 28rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Phone Name: ${userdata.name}</li>
      <li class="list-group-item">Phone Price: ${userdata.price}$</li>
      <li class="list-group-item">Phone Description: ${userdata.description}</li>
    </ul>
</div>

    `;
}

document.addEventListener("DOMContentLoaded", function() {
    let userdata = [];
    if (localStorage.getItem("user")) {
        userdata = JSON.parse(localStorage.getItem("user"));
    }

    let tr = createRow(userdata);
    form.innerHTML += tr;

    if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token');
        fetch("https://auth-rg69.onrender.com/api/products/private/all", {
            method:'GET', 
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
           data && data.forEach(item => {
                let tc = createCard(item);
                card.innerHTML += tc;
           });
        })
        .catch(err => {
            console.log(err);
        })
    }

});