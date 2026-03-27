document.addEventListener("DOMContentLoaded", () => {

    fetch("/components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            verificarUsuario();
        });

});

function verificarUsuario() {
    const user = localStorage.getItem("usuario");

    const loginBtn = document.getElementById("login-btn");

    if (user) {
        loginBtn.innerHTML = "👤";
        loginBtn.href = "#";

        loginBtn.onclick = () => {
            localStorage.removeItem("usuario");
            alert("Logout realizado");
            location.reload();
        };
    }
}