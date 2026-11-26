// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";
import { render } from "./dom.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#app").textContent = `${pendientes} pendientes,${completadas} completadas`;
document.querySelector("h1").textContent=`Gestor de tareas`;
document.querySelector("h1").id="titulo";
document.querySelector("#resumen").textContent=`Tienes ${pendientes} tareas pendientes`;
render();

/*
const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
// 0, 0
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
// 1, 0
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
// Gestor 
console.log("C:", h1.textContent, h1.children.length);
// null
console.log("D:", document.getElementById("#lista"));
*/


import { renderNotas } from "./dom-notas.js";

renderNotas();