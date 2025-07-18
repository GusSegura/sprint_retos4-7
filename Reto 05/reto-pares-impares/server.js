import express from "express";
import { separarParesImpares, validarNumeros, } from "./utils/separarParesImpares.js";

const app = express();
const PORT = 3000;

app.get("/filtrar", (req, res) => {
  const parametro = req.query.numeros;
  const parimpar = req.query.parimpar;


  if (!parametro) {
    return res.status(400).json({
      error: "El parámetro 'numeros' es requerido",
      ejemplo: "?numeros=1,2,3,4,5",
    });
  }

  let numerosArray = parametro.split(",");

  const numeros = validarNumeros(numerosArray);

  if (!numeros) {
    return res.status(400).json({
      error: "Todos los valores deben ser números válidos",
    });
  }

  const { pares, impares } = separarParesImpares(numeros);

  const respuesta = {
    original: numeros,
  };

  if (parimpar === "pares") {
    respuesta.pares = pares;
  } else if (parimpar === "impares") {
    respuesta.impares = impares;
  } else {
    respuesta.pares = pares;
    respuesta.impares = impares;
  }

  res.json(respuesta);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
//http://localhost:3000/filtrar?numeros=1,2,3,4,5,6,7,8,9