import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const listaNotas = document.getElementById("lista-notas");
  const resumenNotas = document.getElementById("resumen-notas");
  listaNotas.replaceChildren();

  alumnos.toSorted((a, b) => b.nota - a.nota).forEach((alumno) => {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} — ${alumno.nota}`;
    li.classList.add(alumno.nota >= 5 ? "aprobado" : "suspenso");
    listaNotas.append(li);
  });

  resumenNotas.textContent = `Media: ${calcularMedia(alumnos).toFixed(1)} · Aprobados: ${contarAprobados(alumnos)} de ${alumnos.length}`;
}