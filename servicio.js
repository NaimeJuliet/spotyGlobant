//consumo de api desde un cliente js
const URI="https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/top-tracks?market=US"


const TOKEN="Bearer BQDHPuV_JXPZgnSblwJxkyt2KdgP8iv71NbBRP1VoKKXP5L2ZM2726xDh9y9qShoLoGEzpi6UZcy9heALPvMBg3LGtRrtYhHjat1_nv2SmKlOwfab6QbntAhz4kmFrTf6gsfSWigdSRs1rK3NC7mkYtPeU7nj8UFIMo"

//LOS PARAMETROS EN JS SIEMPRE SERAN OBJETOS(siempre en minuscula)
//objeto(partes que debe tener)
//1.method
//2.headers
//3.body

//las constantes siempre en mayuscula
const PARAMETROS_PETICION={
    method:"Get",
    headers:{Authorization:TOKEN}
}
//4. Consumo el API Ir a tocarle la puerta al server
fetch(URI,PARAMETROS_PETICION)
//primer then verificar el formato JSON de la respuesta
.then(function(respuesta){
    return (respuesta.json())
})
 //segundo then Hago lo que quiera con la respuesta
.then(function(respuesta){
    //FUNCION PINTAR
//funcion encargada de recoger los datos y pintar en pantalla

    let fila= document.getElementById("fila")

    respuesta.tracks.forEach(function(cancion){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.classList.add("p-3")
        imagen.src=cancion.album.images[0].url

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("px-3")
        cuadroTexto.classList.add("text-center")
    
        let nombreCancion = document.createElement("h4")
        nombreCancion.textContent=cancion.name

        let direccionCancion = document.createElement("audio")
        direccionCancion.src=cancion.preview_url
        direccionCancion.setAttribute("controls","controls")

        cuadroTexto.appendChild(nombreCancion)
        cuadroTexto.appendChild(direccionCancion)
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
})

//mostrar el mensaje de error de la respuesta
/*.catch(function(respuesta){
})*/
.catch(respuesta=> console.log("ERROR: "+respuesta))


