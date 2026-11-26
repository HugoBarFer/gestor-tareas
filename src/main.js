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
