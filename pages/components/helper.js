
const url_base = 'http://localhost:3000/api'

export const login = async (username, password, context) => {
    await fetch(url_base+'/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
        .then((response) => response.json())
        .then(async function (responseJson) {
            if (responseJson[0] !== false) {
                context.username.current.value = "";
                context.password.current.value = "";
                context.login(responseJson[0]);
                context.redirectTo("/home", "/home");
            }
            else {
                console.log("fallo al iniciar sesion")
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export const usuariosExistentes = fetch(url_base+'/usuarios-existentes');
