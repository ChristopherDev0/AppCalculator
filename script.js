const display = document.querySelector("#display"); /* qs(para identificar un id) */
const buttons = document.querySelectorAll("button"); /* qSAll(para identificar todos las class iguales) */

/* recorro todos los botones atraves de un foreach */
buttons.forEach((item) => {/* identifico el boton y obtengo informacion */
    item.onclick = () =>{ /* identificamos el evento de onclick e identificar cual fue*/
        if(item.id == "clear"){ /* item representa a todos los botones */
            display.innerText = ""; /* borramos todo o pasamos a vacio */
        } else if(item.id == "backspace"){
            let string = display.innerText.toString(); /* le asignamos a la variable todo el texto que hay (toS convertimos a una cadena de caracteres)*/
            display.innerText = string.substr(0, string.length - 1);  /* en la ventada de display en su texto interno (substr)extrae el ultimo de sus caracteres(inicio,longitud) */
            /* elimina uno por uno */
        } else if(display.innerText != "" && item.id == "equal"){ /* si el texto es distinto de vacion y preciona igual */
            display.innerText = eval(display.innerText); /* eval(toma el string como una operacion aritmetica) */
        }else if(display.innerText == "" && item.id == "equal"){ /* si no ecribi nada y preciono igual */
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000)/* primero se muestra null, despues pasa a "" vacio en un determinado tiempo */ 
            /* ejecuat una funcion en un determindao tiempo */
        }else{
            display.innerText += item.id; /* lo que precionesmo se va a ir add en la pantalla  */
        }
    };
});

const themeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator"); 
let isDark = true;
themeToggle.onclick = () => { /* cunado haga un click */
    calculator.classList.toggle("dark"); /* calculator afecte a las classes list (llevando con nombre de clase dark) */
    themeToggle.classList.toggle("active"); /* afecta nadamas al boton de activo  */
    isDark =! isDark; /* niego (true-false) */
}

