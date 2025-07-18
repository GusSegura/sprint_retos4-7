import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

// Ruta 
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Calificaciones");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
