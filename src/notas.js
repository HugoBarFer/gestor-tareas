export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];
export const calcularMedia = (alumnos) =>
  alumnos.reduce((total, alumno) => total + alumno.nota, 0) / alumnos.length;

export const contarAprobados = (alumnos) =>
  alumnos.filter((alumno) => alumno.nota >= 5).length;