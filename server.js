// server.js
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// sirve todos los archivos de la carpeta actual (css, imágenes, etc.)
app.use(express.static(__dirname));

// ⚠️ Recomendado: renombra tu HTML principal a "index.html"
// y deja esta línea tal cual:
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
