/* a = ai 
   e = enter
   i = imes
   o = ober
   u = ufat
*/

const textArea = document.querySelector(".text-area"); // almaceno lo que el usuario ingresa en el textarea
const mensaje = document.querySelector(".mensaje");// 

function btnEncriptar(){
    if (textArea.value != ""){
    const txtEncriptado = encriptar(textArea.value)
    mensaje.value = txtEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("no-msg").style.visibility= "hidden";
    document.getElementById("btn-copiar").style.visibility="visible";

}
else {
    alert("Debe ingresar un mensaje");
} 
}
function btnDesEncriptar(){
    const txtEncriptado = desEncriptar(textArea.value)
    mensaje.value = txtEncriptado
    textArea.value = "";
   

}

function encriptar(textoEncriptado) {
    let codigoEncriptador = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()

    for (let i = 0; i < codigoEncriptador.length; i++) {
        if (textoEncriptado.includes(codigoEncriptador[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(codigoEncriptador[i][0], codigoEncriptador [i][1])

        }
    }
return textoEncriptado;

}

function desEncriptar(textoDesEncriptado) {
    let codigoEncriptador = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesEncriptado = textoDesEncriptado.toLowerCase()

    for (let i = 0; i < codigoEncriptador.length; i++) {
        if (textoDesEncriptado.includes(codigoEncriptador[i][1])) {
                textoDesEncriptado = textoDesEncriptado.replaceAll(codigoEncriptador[i][1], codigoEncriptador [i][0])

        }
    }
return textoDesEncriptado;

}

function copiar(){
    mensaje.select();
   
    navigator.clipboard.writeText(mensaje.value);
    alert("Mensaje copiado con éxito");
}
