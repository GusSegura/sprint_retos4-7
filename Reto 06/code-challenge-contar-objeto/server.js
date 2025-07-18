import express from "express";
import { contarPropiedades } from "./controllers/contarController.js";

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal POST /contar
app.post("/contar", contarPropiedades);

// Ruta opcional para comprobar que el servidor está vivo
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
