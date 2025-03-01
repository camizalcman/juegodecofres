const cajaCofres=document.getElementById("contenedorCofres"); //me traigo el contenedor de los cofres
cajaCofres.classList.add("centerX", "centerY"); //le agrego clases

let cofresAbiertos=0 //para llevar la cuenta de cuantos cofres fueron abiertos
let puntosTotales=0 //para llevar la cuenta de los puntos que se van ganando

//creo un array con los posibles valores para los cofres
let valoresCofres=[20, 20, 20, -15, -15, -15, 0, 0, 0]

//Funcion para mostrar el contenedor con los 9 cofres
function mostrarCofres(){

    console.log("Funcion mostrar cofres fue llamada")

    //contenedor de los 9 cofres
    let cofres9=document.createElement("div");
    cofres9.classList.add("cofres9", "centerX", "centerY", "spaceb", "w90m", "marginTop5m" , "cofres9m", "w80t", "cofres9t")
 
    //creo un for para crear los 9 cofres
    for(let i=0; i<9; i++){

        //contenedor de cada cofre
        let cofreContainer = document.createElement("div");
        cofreContainer.classList.add("cofreContainer", "centerX", "centerY" , "spaceb", "dfm", "centerXm",  "cofreContainert","cofreContainerm");

        //agrego el cofre cerrado
        let imgCofre=document.createElement("img");
        imgCofre.setAttribute("src", "./assets/imgs/cofre-cerrado.png");
        imgCofre.setAttribute("alt", "Cofre");
        imgCofre.classList.add("imgCofre", "w80m")
        cofreContainer.appendChild(imgCofre);
        
        //agrego el cofre abierto, arriba del cerrado pero sin visibilidad
        let imgCofreAbierto = document.createElement("img");
        imgCofreAbierto.setAttribute("src", "./assets/imgs/cofre-abierto.png");
        imgCofreAbierto.setAttribute("alt", "Cofre abierto");
        imgCofreAbierto.classList.add("imgCofre", "w80m")
        imgCofreAbierto.style.visibility = "hidden";
        cofreContainer.appendChild(imgCofreAbierto);

        //selecciono un índice random del array 
        let indiceRandom=Math.floor(Math.random()*valoresCofres.length);

        //ese valor se lo asigno como atributo al cofre
        imgCofreAbierto.setAttribute("valor", valoresCofres[indiceRandom]);

        //lo borro del array para no tomar dos veces el mismo valor
        valoresCofres.splice(indiceRandom,1)

        //guardo el valor en una variable
        let valorAsignado=parseInt(imgCofreAbierto.getAttribute("valor"))
        
        //corroboro en consola el valor asignado 
        console.log("Cofre"+ [i]+":"+ valorAsignado)


        //creo la función para abrir los cofres, solo si se abrieron menos de 4
        function abrirCofre(){
            if(cofresAbiertos<4){
                imgCofre.style.visibility = "hidden"; //oculto el cofre cerrado
                imgCofreAbierto.style.visibility = "visible"; //muestro el cofre abierto
                cofresAbiertos++ //sumo un cofre abierto
                console.log("cofres abiertos: " + cofresAbiertos)

                //llamo a la funcion ver premio
                verPremio(valorAsignado);

                //sumo los puntos
                puntosTotales=puntosTotales+valorAsignado
                console.log("Puntos totales: "+ puntosTotales)

                //llamo a la funcion para mostrar puntos con el parámetro correspondiente
                mostrarPuntos(puntosTotales)
            } 
        }

        //le asigno el evento al cofre
        imgCofre.addEventListener("click", abrirCofre);    

        cofres9.appendChild(cofreContainer);
    }

    cajaCofres.appendChild(cofres9)

}

//llamo a la funcion cuando carga la página
document.addEventListener("DOMContentLoaded", mostrarCofres)


//Función para mostrar el contenido del cofre
function verPremio(valorCofre){

    //creo el modal
    let modalPremio=document.getElementById("modalPremio");
    modalPremio.classList.add("jakarta", "w30", "w80m", "w60t");
    modalPremio.style.backgroundColor = "white";
    modalPremio.style.boxShadow="0 0 10px white";
    modalPremio.style.borderRadius="0.4em";

    //div contenedor del mensaje
    let divContenedor=document.createElement("div");
    divContenedor.classList.add("w100", "centerX", "centerY", "columna", "padding2");

    //mensaje
    let mensaje=document.createElement("h3");
    
    //genero un mensaje distinto según el valor del contenido del cofre
    if(valorCofre==20){
        mensaje.innerText="¡Felicitaciones!";
    } else {
        if(valorCofre==0){
            mensaje.innerText="¡Seguí intentando!";
        } else {
            mensaje.innerText="¡Una lástima!";
        }       
    }
    
    divContenedor.appendChild(mensaje);

    //texto
    let texto=document.createElement("p");
    texto.innerText="Dentro del cofre hay:";
    texto.classList.add("marginTop1")
    divContenedor.appendChild(texto)

    //agrego el valor del cofre
    let tituloPremio=document.createElement("h2");
    tituloPremio.innerText=valorCofre;
    divContenedor.appendChild(tituloPremio);

    //boton aceptar
    let botonAceptar=document.createElement("button");
    botonAceptar.innerText="ACEPTAR";
    botonAceptar.style.backgroundColor = "#EBA000";
    botonAceptar.style.color = "white"
    botonAceptar.classList.add("w50", "jakarta", "padding1", "marginTop1");
    botonAceptar.style.borderRadius="0.8em";
    divContenedor.appendChild(botonAceptar);

    modalPremio.appendChild(divContenedor);
    modalPremio.showModal();

    //creo una funcion para cerrar el modal
    function cerrarPremio(){
        console.log("hideModal llamado");
        modalPremio.innerHTML="";
        modalPremio.close();

        //llamo a la funcion definicion partida solo si ya se abrieron los 4 cofres y si ya se cerró el último modal con puntos
        if(cofresAbiertos==4){
            setTimeout(definicionPartida, 400);
        }
    }

    botonAceptar.addEventListener("click", cerrarPremio)
    
}


const nombre = localStorage.getItem("nombre");// Obtengo el nombre almacenado en localStorage
console.log(nombre); 

//creo una funcion para mostrar los puntos
function mostrarPuntos(puntosActuales){
    const contPuntos=document.getElementById("puntos");
    contPuntos.classList.add("jakarta", "colorBlanco", "puntosClase", "puntosClasem");
    contPuntos.style.fontSize = "1.4em";
    contPuntos.innerText=nombre+":  "+puntosActuales
}

mostrarPuntos(puntosTotales)


const botonReiniciar=document.getElementById("reiniciar"); //me traigo el botón reiniciar

//creo una funcion para reiniciar la partida
function reiniciarPartida(){
    cajaCofres.innerHTML = ""; 

    //reinicio los valores
    cofresAbiertos = 0; 
    puntosTotales = 0; 
    valoresCofres = [20, 20, 20, -15, -15, -15, 0, 0, 0]; //Vuelvo a poner los posibles valores en el array
    mostrarPuntos(puntosTotales)

    mostrarCofres()//llamo a la funcion que cree nuevamente los cofres con su contenido
}

//le asigno el evento al boton
botonReiniciar.addEventListener("click", reiniciarPartida)


//funcion para definir el resultado de la partida
function definicionPartida(){

    //modal
    let modalFinal=document.getElementById("modalFin");
    modalFinal.classList.add("jakarta", "w30","w80m", "w60t", "textCenterm");
    modalFinal.style.backgroundColor = "white";
    modalFinal.style.boxShadow="0 0 10px white";
    modalFinal.style.borderRadius="0.4em";

    //contenedor del texto
    let divContenedorFinal=document.createElement("div");
    divContenedorFinal.classList.add("w100", "centerX", "centerY", "columna", "padding2");

    //defino el mensaje según el resultado
    let mensajeFinal=document.createElement("h3");
    
    if(puntosTotales>=40){
        mensajeFinal.innerText="¡Felicitaciones ganaste el juego!";
    } else {
        mensajeFinal.innerText="¡Qué lástima, perdiste el juego!";
    }
    
    divContenedorFinal.appendChild(mensajeFinal);

    //boton aceptar
    let botonAceptarFinal=document.createElement("button");
    botonAceptarFinal.innerText="ACEPTAR";
    botonAceptarFinal.style.backgroundColor = "#EBA000";
    botonAceptarFinal.style.color = "white"
    botonAceptarFinal.classList.add("w50", "jakarta", "padding1", "marginTop1");
    botonAceptarFinal.style.borderRadius="0.8em";
    divContenedorFinal.appendChild(botonAceptarFinal);

    modalFinal.appendChild(divContenedorFinal);
    modalFinal.showModal()

    function cerrarPremioFinal(){
        console.log("hideModal llamado")
        modalFinal.innerHTML=""
        modalFinal.close()
    }

    botonAceptarFinal.addEventListener("click", cerrarPremioFinal)
}


const botonReglasJuego=document.getElementById("reglasJuego");
const modal=document.getElementById("reglas"); //Traigo el contenedor del modal

//Funcion para mostrar reglas
function mostrarReglas(){

    console.log("Funcion mostrar reglas fue llamado")
    modal.innerHTML = "";//Limpio el contenido del modal
    modal.classList.add("modalReglasClases","padding1" ,"jakarta", "absolute", "w80m", "w60t"); //Le agrego las clases

    let divContenedor=document.createElement("div");
            
    let titulo=document.createElement("h3");
    titulo.innerText=("Reglas del juego");
    divContenedor.appendChild(titulo);

    let descripcion=document.createElement("p");
    descripcion.innerText=("En este desafío te enfrentarás a una serie de cofres repartidos en un tablero. Tres de estos cofres esconden tesoros que suman 20 puntos, mientras que otros 3 contienen trampas que restan 15 puntos y los restantes están vacíos. En cada partida, debes abrir exactamente 4 cofres. Al finalizar, ganarás si acumulas 40 puntos o más. ¡Buena suerte!");
    descripcion.style.lineHeight = "1.5"
    descripcion.classList.add("marginTop1"); //Le agrego las clases
    divContenedor.appendChild(descripcion);

    let cruz=document.createElement("i");
    cruz.classList.add("fa-solid", "fa-2x","fa-xmark", "colorNaranja", "claseCruz");
    divContenedor.appendChild(cruz);

    modal.appendChild(divContenedor);
    modal.showModal();

    function hideModal(){
        console.log("hideModal llamado")
        modal.close()
    }

    cruz.addEventListener("click", hideModal)

}

botonReglasJuego.addEventListener("click", mostrarReglas)

/*BOTÓN DE MÚSICA*/
const musicButton = document.getElementById("botonAudio");
const music = document.getElementById("audio"); 
const icono = document.getElementById("iconoAudio");

//Función para alternar el audio
function toggleMusic() {
    if (music.paused) {
        music.play(); 
        icono.classList.remove("fa-volume-xmark");
        icono.classList.add("fa-volume-high");

    } else {
        music.pause(); 
        icono.classList.remove("fa-volume-high");
        icono.classList.add("fa-volume-xmark");
        
    }
}

// Agregar un event listener al botón para cambiar el estado del audio
musicButton.addEventListener("click", toggleMusic);

/*DARK MODE*/

//me traigo las partes del sitio
let cabeza = document.querySelector("header");
let cuerpo = document.querySelector("body");
let pie = document.querySelector("footer");
let subtitulos = document.querySelector("header h3");
let botonCambio = document.getElementById("cambiarModo");

botonCambio.addEventListener("click", ()=>{

    cuerpo.classList.toggle("fondoBeige");

    cabeza.classList.toggle("fondoBeige");

    subtitulos.classList.toggle("colorNegro");

});