
const createAnotherUser = (userParam, passParam) => {
    const user = {
        username: userParam,
        password: passParam
    }
    return user;
}

const addNewUserToLocalStorage = () => {
    let userInput = document.querySelector("#username").value;
    let passInput = document.querySelector("#password").value;
    if (userInput =="" || passInput==""){alert ("Por favor ingrese Usuario y Contraseña")}else{
    if (!localStorage.getItem("users")) {
        let user = createAnotherUser(userInput, passInput);
        let users = [user];
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        let user = createAnotherUser(userInput, passInput);
        let users = JSON.parse(localStorage.getItem("users"));
        let result = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.username) {
                result = true;
            }
        }
        if (result) {
            alert("Usuario ya está registrado");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        } else {

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            loadTableUser();
            alert(user.username + " Ha sido registrado");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
    }}
}

document.querySelector("#addBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addNewUserToLocalStorage();
})

const loadTableUser = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let divUsers = document.querySelector("#users");
    removeP(divUsers);
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
      /* divUsers.appendChild(createP(users[i].username));*/
    }
}

const removeP = (divUsers) => {
    let i = divUsers.childNodes.length - 1;
    while (divUsers.hasChildNodes()) {
        console.log("Eliminando nodo " + divUsers.childNodes[i])
        divUsers.removeChild(divUsers.childNodes[i]);
        i--;
    }
}

const createP = (user) => {
    let p = document.createElement("p");
    p.innerText = user;
    return p;
}
/*
loadUser();*/


