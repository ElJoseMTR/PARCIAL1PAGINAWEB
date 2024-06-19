window.addEventListener("resize", anchoPagina);

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("formulario-login");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        verificar();
    });
});



var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-Login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var menuclicks = document.querySelector(".sidebar");


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    menuButton.addEventListener("click", function () {
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-250px";
        }
    });
});

//codigo para la parte del boton de salir de la sección

document.getElementById("salir").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    var confirmacion = confirm("¿Estás seguro que quieres salir?");
    if (confirmacion) {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role')
        window.location.href = "../index.html";
    }
});



//comienza codigo para el ChatBot
document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById('send-btn').getAttribute('data-event-click-registered')) {
        document.getElementById('send-btn').addEventListener('click', sendMessage);
        document.getElementById('send-btn').setAttribute('data-event-click-registered', 'true');
    }
});


//codigo de parte de la API de chatBot
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        document.getElementById('user-input').value = '';
        fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    var botResponse = data[0].text;
                    addBotMessage(botResponse);
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

//Poner el mensaje del usuario en la parte del contenedor
function addUserMessage(message) {
    var chatContainer = document.getElementById('chat-box');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.innerHTML = `<strong>USER:</strong> ${message}`;
    chatContainer.appendChild(userMessageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

//Poner el mensaje del chat bot en la parte del contendor
function addBotMessage(message) {
    var chatContainer = document.getElementById('chat-box');
    var botMessageElement = document.createElement('div');
    botMessageElement.className = 'bot-message';
    botMessageElement.innerHTML = `<strong>CHAT:</strong> ${message}`;
    chatContainer.appendChild(botMessageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

//Termina codigo de ChatBot

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }

}

function iniciarsesionslap() {

    if (window.innerWidth > 850) {

        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "block";
        caja_trasera_login.style.display = "none";
    }

}

anchoPagina();

function anchoPagina() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";

    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";

    }
}




//codigo del el la ventana de al lado.
function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(function (sec) {
        if (sec.id === seccion) {
            sec.classList.remove("hidden");
        } else {
            sec.classList.add("hidden");
        }
    });
    window.mostrarSeccion = mostrarSeccion;
}

