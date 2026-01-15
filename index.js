const express = require('express');
const app = express();
const contatosRoutes = require("./routes/contatos.js");

app.use("/contatos", contatosRoutes);

app.get("/", (req, res) => {
  res.send("Api rodando! Coloque as rotas corretamente");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
