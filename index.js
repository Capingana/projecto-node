const express = require("express");
const app = express();
const PORTA = 8081;

// ===================================================
app.get("/", (req, response) => {
    let sms="Estou dentro do meu app node.js";
  response.send(sms.toLocaleUpperCase());
});

// ===================================================
app.get("/sobre",function(req,response){
response.send("Pagina sobre");
});

// CRIANDO SERVIDOR
app.listen(PORTA, () => {
  console.log(`The server is running in : ${PORTA}`);
});
