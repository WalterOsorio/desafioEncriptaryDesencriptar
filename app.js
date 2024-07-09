let textoUsuario = 0;
let textoEncriptado = 0;
let textoDesencriptado = 0;


function encriptar() {
    let textoUsuario = document.getElementById("textoUsuario").value;
    let textoEncriptado = textoUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    console.log(textoEncriptado);
    document.getElementById("textoSalida").innerText = textoEncriptado;

    limpiarCaja();

    document.getElementById("div__primera__vista").classList.add("display__none");
    document.getElementById("div__output").classList.remove("div__output__display");
    document.getElementById("div__boton__copiar").classList.remove("div__boton__copiar__display");
    
    return;
}


function desencriptar() {
    let textoUsuario = document.getElementById("textoUsuario").value;
    let textoDesencriptado = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    console.log(textoDesencriptado);
    document.getElementById("textoSalida").innerText = textoDesencriptado;
    
    limpiarCaja();

    document.getElementById("div__primera__vista").classList.add("display__none");
    document.getElementById("div__output").classList.remove("div__output__display");
    document.getElementById("div__boton__copiar").classList.remove("div__boton__copiar__display");
    
    return;
}

function textoCopiado() {
    let texto = document.getElementById("textoSalida").value;
    navigator.clipboard.writeText(texto)
    return;
}

function limpiarCaja () {
    document.querySelector("#textoUsuario").value = "";
}

function condicionesIniciales() {
    limpiarCaja();


}