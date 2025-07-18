import express from 'express';
import { encontrarMayor } from './utils/encontrarMayor.js';

const app = express();
const PORT = 3000;

app.get('/mayor', (req, res) => {
  const nums = req.query.numeros;

  if (!nums) {
    return res.status(400).json({
      error: "Ingrese como parametro numeros separados por comas Ejemplo: /mayor?numeros=5,3,9,1"
    });
  }

  const numerosArray = nums.split(',');

  try {
    const resultado = encontrarMayor(numerosArray);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
//http://localhost:3000/mayor?numeros=15,3,29,11