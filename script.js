const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

inputTexto.focus();

function btnEncriptar() 
{
    const textoEncriptado = encriptar(inputTexto.value); //recibe el resultado de la función 'encriptar'
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"; //estilos de css a través de javascript. quita la imagen del niño al mostrar texto
    inputTexto.value = "";
}

function btnDesencriptar() 
{
    const textoDesencriptado = desencriptar(inputTexto.value); //recibe el resultado de la función 'desencriptar'
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}

function encriptar(stringEncriptada)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); //convierte el código que recibe en minúsculas

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0])) //función 'includes' de javascript para revisar si la string incluye a las matrices
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],  matrizCodigo[i][1]); //reemplaza todas las letras en el texto (matriz, 0) con las palabras indicadas (matriz, 1)
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase(); //convierte el código que recibe en minúsculas

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) //función 'includes' de javascript para revisar si la string incluye a las matrices
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],  matrizCodigo[i][0]); //reemplaza todas las letras en el texto (matriz, 0) con las palabras indicadas (matriz, 1)
        }
    }

    return stringDesencriptada;
}

function copiar()
{
    mensaje.select(); //seleccionar todo lo que está adentro del cuadro de texto
    navigator.clipboard.writeText(mensaje.value); //escribe el texto especificado en el portapapeles (lo 'copia')
    mensaje.value = "";
    alert("Texto copiado");
}