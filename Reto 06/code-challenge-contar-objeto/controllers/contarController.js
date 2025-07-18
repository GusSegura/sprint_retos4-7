export function contarPropiedades(req, res) {
  const objeto = req.body;
  const detallado = req.query.detallado === "true";

  // Validar que sea un objeto válido (no null, no array)
  if (!objeto || typeof objeto !== "object" || Array.isArray(objeto)) {
    return res.status(400).json({
      error: "Se esperaba un objeto JSON válido (no null ni array)",
    });
  }

  const claves = Object.keys(objeto);
  const resultado = {
    propiedades: claves.length,
  };

  if (detallado) {
    resultado.detalles = claves;
  }

  res.json(resultado);
}
