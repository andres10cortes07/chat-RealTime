"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Registro del Service Worker del usuario 1
    navigator.serviceWorker.register("swUser1.js");

    // Referencia al botón de enviar
    const formMsg = document.querySelector(".form-msg");
    let inpMensaje = document.getElementById("mensaje")

    // Evento click del botón de enviar
    formMsg.addEventListener("submit", (e) => {
        e.preventDefault();
        let mensaje = document.getElementById("mensaje").value.trim();
        if (mensaje.length > 0) {
            navigator.serviceWorker.ready
                .then(reg => {
                    let mensajeMarcado = {
                        contenido: mensaje,
                        emisor: "user2"
                    };
                    reg.active.postMessage(mensajeMarcado);
                    agregarMensajeEnviado(mensaje);

                    let inpError = inpMensaje.style.outline = "2px solid #DE5353";
                    
                    if(inpError) inpMensaje.style.outline = "none";
                });
        } else {
            inpMensaje.style.outline = "2px solid #DE5353";
        }
    });
});

// Función para agregar el mensaje enviado en la interfaz
const agregarMensajeEnviado = (mensaje) => {
    let codigoMsgEnv = `
    <div class="mensaje-env">
        <p>${mensaje}</p>
    </div>
    `;
    let fila = document.querySelector(".caja-conversacion");
    fila.innerHTML += codigoMsgEnv;
    document.getElementById("mensaje").value = "";
    window.scrollTo(0, document.body.scrollHeight);
};

// Escuchando mensajes del Service Worker
navigator.serviceWorker.addEventListener("message", (msg) => {
    if (msg.data.emisor === "user1") {
        let codigoMsgRec = `
        <div class="mensaje-rec">
            <p>${msg.data.contenido}</p>
        </div>
        `;
        let msgRec = document.querySelector(".caja-conversacion");
        msgRec.innerHTML += codigoMsgRec;
        window.scrollTo(0, document.body.scrollHeight);
    }
});
