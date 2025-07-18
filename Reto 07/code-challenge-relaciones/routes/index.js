import express from "express";
import calificacionesRoutes from "./calificacionesRoutes.js";

const router = express.Router();

router.use("/", calificacionesRoutes);

export default router;
