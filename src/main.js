// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#app").textContent = `${pendientes} pendientes,${completadas} completadas`;