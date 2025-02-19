const botonReglas=document.getElementById("verReglas"); //Traigo el boton "Ver reglas"
const modal=document.getElementById("reglas"); //Traigo el contenedor del modal

//Funcion para mostrar reglas
function mostrarReglas(){

    console.log("Funcion mostrar reglas fue llamado")
    modal.innerHTML = "";//Limpio el contenido del modal para que no se encime
    modal.classList.add("modalReglasClases","padding1" ,"jakarta", "absolute", "w100m"); //Le agrego las clases

    //creo el div contenedor    
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



//Funcion para validar el formulario, guardar su contenido y redirigir de página
//me traigo los campos name y error
let campoNombre = document.getElementById("name");
let campoError = document.getElementById("error");
let validez; //creo una variable para comprobar su validez

function envioFormulario(event){

    event.preventDefault(); //evitar que el formulario se envie automáticamente

    campoError.innerHTML = ""; //limpio el campo error por si tenía contenido anteriormente

        //verifico que sea un nombre real
        if (campoNombre.value.length < 3) {
            campoNombre.classList.add("bordeRojo")
            campoError.innerHTML += "El nombre debe contener al menos 3 caracteres. "
            validez=false
            //le inserto un mensaje de error junto con el borde rojo y le asigno un false a la variable validez

        } else {
            campoNombre.classList.remove("bordeRojo");
            validez=true
            //le saco el borde rojo y le asigno un true a la variable validez
        }

        //solo se ejecuta si el nombre es valido
        if(validez===true){
            const nombre = document.getElementById("name").value; //Obtengo el nombre ingresado
            localStorage.setItem("nombre", nombre); //Guardo el nombre en localStorage
            window.location.href = "juego.html"; //Redirijo a la siguiente página
        }
}

//le asigno el evento al boton 
const botonComenzar = document.getElementById("comenzarJuego");
botonComenzar.addEventListener("click", envioFormulario);



//Funcion para eliminar el valor ingresado en el formulario en el caso de que el usuario recargue la pagina
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

