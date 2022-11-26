
/*
const createAnotherUser = (userParam, passParam) => {
    const user = {
        username: userParam,
        password: passParam
    }
    return user;
}*/
const limpiar = () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

const addNewUserToLocalStorage = () => {
    let userInput = document.querySelector("#username").value;
    let passInput = document.querySelector("#password").value;
    if (userInput == "" || passInput == "") { alert("Por favor ingrese Usuario y Contraseña") } else {
        if (!localStorage.getItem("users")) {
            alert("No existe usuario con ese Nombre, por favor Registrese");
            limpiar();
        } else {
          /* let user = createAnotherUser(userInput, passInput);*/
            let users = JSON.parse(localStorage.getItem("users"));
            let result = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === userInput && users[i].password === passInput) {
                    result = true;
                }
            }
            if (result) {
                alert("Bienvenid@ " + userInput);
                limpiar();
                
            } else {
                alert("Nombre o Contraseña incorrectos, por favor reingrese sus datos");
                limpiar();
            }
        }
    }
}

document.querySelector("#addBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addNewUserToLocalStorage();
})

const createP = (user) => {
    let p = document.createElement("p");
    p.innerText = user;
    return p;
}




