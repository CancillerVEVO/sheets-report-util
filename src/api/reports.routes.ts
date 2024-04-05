import express from "express";

const router = express.Router();

// Repote de ventas de una sesión
router.post("/sold/:sessionId", (req, res) => {
  res.send("POST /reports");
});

// Reporte de productos vendidos (todos los productos)
router.post("/sold", (req, res) => {});

// Reporte historico de productos vendidos de un producto
router.post("/sold/:productId", (req, res) => {});

// Reporte de todos los productos 
router.post("/products", (req, res) => {});

// Reporte de dinero generado en todas las sesiones
router.post("/money-generated", (req, res) => {});

export default router;