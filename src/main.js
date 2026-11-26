// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#app").textContent = `${pendientes} pendientes,${completadas} completadas`;
document.querySelector("h1").textContent=`Gestor de tareas`;
document.querySelector("h1").id="titulo";
document.querySelector("#resumen").textContent=`Tienes ${pendientes} tareas pendientes`;
const li1 = document.createElement("li");
li1.className = "demo";
li1.textContent = "Estudiar";

const li2 = document.createElement("li");
li2.className = "demo";
li2.textContent = "Hacer la compra";

const li3 = document.createElement("li");
li3.className = "demo";
li3.textContent = "Entregar práctica";

document.querySelector("#lista").append(li1,li2,li3);

document.querySelectorAll(".demo").forEach((li)=>{
    li.textContent= `- ${li.textContent}`;
});
//va sin # porque el metodo ya sabe que le vamos a pasar un id.
document.getElementById("lista");

document.getElementsByClassName("demo");
document.getElementsByClassName("demo").forEach((li) => {
    console.log(li.textContent);
});

/*error: [Error] TypeError: document.getElementsByClassName("demo").forEach is not a function. (In 'document.getElementsByClassName("demo").forEach((li) => {
    console.log(li.textContent);
})', 'document.getElementsByClassName("demo").forEach' is undefined)
	Código del módulo (main.js:35)*/


Array.from(document.getElementsByClassName("demo")).forEach((li) => {
    li.textContent=li.textContent.replace(" -","✓ ");
});

//La HTMLCollection es viva, cambia automáticamente
//La NodeList es estatica, no cambia automaticamente