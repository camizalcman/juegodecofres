const botonReglas=document.getElementById("verReglas"); //Traigo el boton "Ver reglas"
const modal=document.getElementById("reglas"); //Traigo el contenedor del modal

//Funcion para mostrar reglas
function mostrarReglas(){

    console.log("Funcion mostrar reglas fue llamado")
    modal.innerHTML = "";//Limpio el contenido del modal para que no se encime
    modal.classList.add("modalReglasClases","padding1" ,"jakarta", "absolute", "w100m"); //Le agrego las clases

    //div contenedor    
    let divContenedor=document.createElement("div");
    
    //titulo
    let titulo=document.createElement("h3");
    titulo.innerText=("Reglas del juego");
    divContenedor.appendChild(titulo);

    //descripcion
    let descripcion=document.createElement("p");
    descripcion.innerText=("En este desafío te enfrentarás a una serie de cofres repartidos en un tablero. Tres de estos cofres esconden tesoros que suman 20 puntos, mientras que otros 3 contienen trampas que restan 15 puntos y los restantes están vacíos. En cada partida, debes abrir exactamente 4 cofres. Al finalizar, ganarás si acumulas 40 puntos o más. ¡Buena suerte!");
    descripcion.style.lineHeight = "1.5"
    descripcion.classList.add("marginTop1"); //Le agrego las clases
    divContenedor.appendChild(descripcion);

    //icono cruz
    let cruz=document.createElement("i");
    cruz.classList.add("fa-solid", "fa-2x","fa-xmark", "colorNaranja", "claseCruz");
    divContenedor.appendChild(cruz);

    modal.appendChild(divContenedor);
    modal.showModal();

    //cerrar el modal
    function hideModal(){
        console.log("hideModal llamado")
        modal.close()
    }

    //le asigno el evento al icono cruz
    cruz.addEventListener("click", hideModal)

}

//le asigno el evento al boton mostrar reglas
botonReglas.addEventListener("click", mostrarReglas)

//funcion para guardar el valor ingresado en el formulario y para redirigir a la siguiente pagina
function envioFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById("name").value; // Obtener el nombre ingresado
    
    localStorage.setItem("nombre", nombre); // Guardar el nombre en localStorage

    window.location.href = "juego.html"; // Redirigir a la siguiente página
}

//le asigno el evento al formulario
const form = document.getElementById("formulario");
form.addEventListener("submit", envioFormulario);


//creo una fucnion para eliminar el valor ingresado en el formulario en el caso de que el usuario recargue la pagina
function limpiarCampoNombre() {
    document.getElementById("name").value = ""; //borra el campo
}

window.addEventListener("load", limpiarCampoNombre);


/*DARK MODE*/

//me traigo las partes del sitio
let cabeza = document.querySelector("header");
let cuerpo = document.querySelector("body");
let pie = document.querySelector("footer");
let subtitulos = document.querySelector("header h2");
let label = document.querySelector("form label");
let input = document.getElementById("name");
let botonCambio = document.getElementById("cambiarModo");

botonCambio.addEventListener("click", ()=>{

    cuerpo.classList.toggle("fondoBeige");

    cabeza.classList.toggle("fondoBeige");

    subtitulos.classList.toggle("colorNegro");
   
    label.classList.toggle("colorNegro");

    input.classList.toggle("claseInput");

});