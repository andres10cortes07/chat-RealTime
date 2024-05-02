"use strict";

const btnMostrar = document.querySelector(".btn-prueba");

btnMostrar.addEventListener("click", (e)=>{
    e.preventDefault();
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    let windowWidth = screenWidth/2;
    let windowHeight = screenHeight/1.5;

    window.open("usuario1.html", "usuario1", `width=${windowWidth}, height=${windowHeight}, top=${screenHeight/6}`)
    window.open("usuario2.html", "usuario2", `width=${windowWidth}, height=${windowHeight}, top=${screenHeight/6}, left=${windowWidth}`)
})