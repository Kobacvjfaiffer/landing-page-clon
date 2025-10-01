// server.js
const express = require("express");
const cors = require("cors");
const services = require("./data/services.json"); // Asegúrate que exista el archivo

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos simulados (como si vinieran de una BD)
const proyectos = [
  { id: 1, titulo: "Landing Page Clon", descripcion: "Proyecto con HTML, CSS y JS" },
  { id: 2, titulo: "Portafolio Personal", descripcion: "Página responsive con proyectos" },
  { id: 3, titulo: "API con Node.js", descripcion: "Backend básico con Express" }
];

// Rutas API
app.get("/api/proyectos", (req, res) => {
  res.json(proyectos);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
