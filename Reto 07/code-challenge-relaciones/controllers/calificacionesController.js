import { estudiantes } from "../data/estudiantes.js";
import { cursos } from "../data/cursos.js";
import { calificaciones } from "../data/calificaciones.js";

export function obtenerCalificaciones(req, res) {
  const { curso, estudiante, minima } = req.query;

  const resultado = calificaciones.filter(c => {
      const est = estudiantes.find(e => e.id === c.estudianteId);
      const cur = cursos.find(k => k.id === c.cursoId);

      if (!est || !cur) return false;

      // Filtro por nombre de curso
      if (curso && cur.nombre !== curso) return false;

      // Filtro por nombre parcial de estudiante
      if (estudiante && !est.nombre.toLowerCase().includes(estudiante.toLowerCase())) return false;

      // Filtro por calificación mínima
      if (minima && c.calificacion < parseInt(minima)) return false;

      return true;
    })
    .map(c => {
      const est = estudiantes.find(e => e.id === c.estudianteId);
      const cur = cursos.find(k => k.id === c.cursoId);

      return {
        nombre: est?.nombre ?? "Desconocido",
        curso: cur?.nombre ?? "Desconocido",
        calificacion: c.calificacion,
      };
    });

  res.json(resultado);
}
