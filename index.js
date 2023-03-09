/* llamar elementos del dom */
const botones = document.querySelector(".botones")
const numeros = document.getElementsByClassName("numero")
const operadores = document.getElementsByClassName("operador")
const igual = document.querySelector(".igual")
const borrar = document.querySelector(".borrar")
let pantallaArriba = document.querySelector(".cuenta")
let pantallaAbajo = document.querySelector(".resultado")

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i].textContent;
  console.log(numero)
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

