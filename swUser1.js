"use strict";

self.addEventListener("message", (event) => {
    // if (event.data.emisor === "user2") {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage(event.data);
            });
        });
    //}
});

self.addEventListener("install", () => {
    console.log("Instalado");
});

self.addEventListener("activate", () => {
    console.log("swUser1 activo");
});

self.addEventListener("fetch", () => {
    console.log("swUser1 interceptó una petición");
});
