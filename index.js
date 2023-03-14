/* llamar elementos del dom */
/* const botones = document.querySelector(".botones")
const numeros = document.getElementsByClassName("numero")
const operadores = document.getElementsByClassName("operador")
const igual = document.querySelector(".igual")
const borrar = document.querySelector(".borrar")
let pantallaArriba = document.querySelector(".cuenta")
let pantallaAbajo = document.querySelector(".resultado")

for (let i = 0; i < numeros.length; i++) {
  if(botones == numeros[i].textContent){
  pantallaArriba += numeros[i].textContent;
  console.log(numero)}
}

botones.addEventListener("click", () => {

})
/* 
console.log(botones)
console.log(numeros)
console.log(operadores)
console.log(igual)
console.log(borrar) */
/* funciones */


/* evento de escucha */



//CHAT GPT
// Selección de elementos HTML
const pantallaCuenta = document.querySelector('.cuenta');
const pantallaResultado = document.querySelector('.resultado');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonIgual = document.querySelector('.igual');
const botonBorrar = document.querySelector('.borrar');

let cuenta = '';
let operador = '';
let resultado = null;

// Función para actualizar la pantalla
function actualizarPantalla() {
  pantallaCuenta.innerText = cuenta;
  pantallaResultado.innerText = resultado;
}

// Función para realizar una operación
function calcular() {
  let valor1 = parseFloat(resultado);
  let valor2 = parseFloat(cuenta);

  switch (operador) {
    case '+':
      resultado = valor1 + valor2;
      break;
    case '-':
      resultado = valor1 - valor2;
      break;
    case '*':
      resultado = valor1 * valor2;
      break;
    case '/':
      resultado = valor1 / valor2;
      break;
    default:
      resultado = cuenta;
  }

  cuenta = '';
  operador = '';
}

// Asignación de eventos a los botones de números
botonesNumeros.forEach((boton) => {
  boton.addEventListener('click', () => {
    cuenta += boton.innerText;
    actualizarPantalla();
  });
});

// Asignación de eventos a los botones de operadores
botonesOperadores.forEach((boton) => {
  boton.addEventListener('click', () => {
    if (resultado === null) {
      resultado = cuenta;
    } else if (operador) {
      calcular();
    }

    operador = boton.innerText;
    cuenta = '';
    actualizarPantalla();
  });
});

// Asignación de eventos al botón de igual
botonIgual.addEventListener('click', () => {
  if (operador) {
    calcular();
    actualizarPantalla();
  }
});

// Asignación de eventos al botón de borrar
botonBorrar.addEventListener('click', () => {
  cuenta = '';
  operador = '';
  resultado = null;
  actualizarPantalla();
});
