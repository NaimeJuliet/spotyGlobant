/*import*/

//consumo de api desde un cliente js
const URI="https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/top-tracks?market=US"


const TOKEN="Bearer BQDHPuV_JXPZgnSblwJxkyt2KdgP8iv71NbBRP1VoKKXP5L2ZM2726xDh9y9qShoLoGEzpi6UZcy9heALPvMBg3LGtRrtYhHjat1_nv2SmKlOwfab6QbntAhz4kmFrTf6gsfSWigdSRs1rK3NC7mkYtPeU7nj8UFIMo"

//las constantes siempre en mayuscula
const PARAMETROS_PETICION={
    method:"Get",
    headers:{Authorization:TOKEN}
}
